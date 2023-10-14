import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { PromotionService } from '../_services/promotion.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { Promotion } from '../_model/promotion.model';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-show-promotion-details',
  templateUrl: './show-promotion-details.component.html',
  styleUrls: ['./show-promotion-details.component.css'],
})
export class ShowPromotionDetailsComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  promotionDetails: any;
  displayedColumns: string[] = [
    'id',
    'promotionName',
    'beginningDate',
    'endingDate',
    'promotionPercentage',
    'edit',
  ];

  constructor(
    private promotionService: PromotionService,
    private router: Router,
    private userAuthService: UserAuthService
  ) {}

  ngOnInit(): void {
    this.getAllPromotions();
  }

  public getAllPromotions() {
    this.promotionService.getAllPromotions().subscribe({
      next: (response: any) => {
        if (response.message === 'JWT was expired or incorrect') {
          this.userAuthService.clear();
          this.router.navigate(['/login']);
        } else {
          this.promotionDetails = new MatTableDataSource(response.data);
          this.promotionDetails.paginator = this.paginator;
          this.promotionDetails.sort = this.sort;
          const sortState: Sort = { active: 'id', direction: 'asc' };
          this.sort.active = sortState.active;
          this.sort.direction = sortState.direction;
          this.sort.sortChange.emit(sortState);
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deletePromotion(promotionId) {
    this.promotionService.deletePromotion(promotionId).subscribe({
      next: (response) => {
        this.getAllPromotions();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  editPromotion(id) {
    this.router.navigate(['admin/promotion_admin/form/', { id: id }]);
  }
}
