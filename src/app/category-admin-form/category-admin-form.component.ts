import { Component, OnInit } from '@angular/core';
import { Category } from '../_model/category.model';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../_services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-admin-form',
  templateUrl: './category-admin-form.component.html',
  styleUrls: ['./category-admin-form.component.css'],
})
export class CategoryAdminFormComponent implements OnInit {
  category: Category = {
    id: 0,
    categoryName: '',
  };
  alreadyExistCategoryError: boolean = false;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.actRoute.snapshot.params.id != undefined) {
      this.actRoute.data.subscribe((data) => {
        this.category = data.routeCategoryResolver;
      });
    }
  }

  addCategory(categoryForm: NgForm) {
    if(categoryForm.valid){
      this.categoryService.addCategory(this.category).subscribe({
        next: (response: any) => {
          if (response.status == 200) {
            this.router.navigate(['/admin/category_admin']);
          } else {
            if (response.message.includes('ConstraintViolationException')) {
              this.alreadyExistCategoryError = true;
            }
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  resetNoExistErrors(){
    this.alreadyExistCategoryError = false;
  }
}
