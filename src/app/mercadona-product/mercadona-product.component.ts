import { Component, Directive, ViewChild } from '@angular/core';
import { Category } from '../_model/category.model';
import { CategoryService } from '../_services/category.service';
import { Product } from '../_model/product.model';
import { ActivatedRoute } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MercadonaProduct } from '../_model/mercadonaProduct.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-mercadona-product',
  templateUrl: './mercadona-product.component.html',
  styleUrls: ['./mercadona-product.component.css'],
})
export class MercadonaProductComponent {
  @ViewChild('paginator') paginator: MatPaginator;

  currentPage = 0;

  pageSize = 3;

  products: any[];

  product: Product = {
    id: 0,
    productLibelle: '',
    productDescription: '',
    productPrice: 0,
    productDiscountedPrice: 0,
    category: null,
    promotion: null,
    image: null,
  };

  productsFiltered: MercadonaProduct[];

  productsFilteredforPagination: MercadonaProduct[];

  categories: Category[];

  cols: number;

  gridByBreakpoint = {
    xl: 3,
    lg: 3,
    md: 2,
    sm: 2,
    xs: 1,
  };

  constructor(
    private categoryService: CategoryService,
    private actRoute: ActivatedRoute,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        if (result.matches) {
          if (result.breakpoints[Breakpoints.XSmall]) {
            this.cols = this.gridByBreakpoint.xs;
          }
          if (result.breakpoints[Breakpoints.Small]) {
            this.cols = this.gridByBreakpoint.sm;
          }
          if (result.breakpoints[Breakpoints.Medium]) {
            this.cols = this.gridByBreakpoint.md;
          }
          if (result.breakpoints[Breakpoints.Large]) {
            this.cols = this.gridByBreakpoint.lg;
          }
          if (result.breakpoints[Breakpoints.XLarge]) {
            this.cols = this.gridByBreakpoint.xl;
          }
        }
      });
  }

  ngOnInit(): void {
    this.actRoute.data.subscribe((data) => {
      this.products = data.routeAllProductsResolver;
      this.productsFiltered = this.checkPromotionValidity(this.products);
      this.productsFilteredforPagination = this.productsFiltered;
      this.updateProducts();
    });
    this.getAllCategories();
    console.log(this.products)
  }

  compareWithCategory(object1: Category, object2: Category) {
    return object1 && object2 && object1.categoryName === object2.categoryName;
  }

  public getAllCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (response: any) => {
        this.categories = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public filterProducts(evt) {
    if (evt.value != 0) {
      this.productsFiltered = this.checkPromotionValidity(
        this.products.filter((product) => {
          return product.category.id === evt.value.id;
        })
      );
       this.productsFilteredforPagination = this.productsFiltered;
       this.onChangeCategoryForPagination()
    } else {
      this.productsFiltered = this.checkPromotionValidity(this.products);
      this.productsFilteredforPagination = this.productsFiltered
      this.onChangeCategoryForPagination()
    }
  }

  public checkPromotionValidity(products) {
    let productsFiltered = products;

    productsFiltered.forEach((product) => {
      let now = Date.now();
      if (
        product.promotion &&
        product.promotion.beginningDate <= now &&
        product.promotion.endingDate >= now
      ) {
        product.isPromotionValid = true;
      } else {
        product.isPromotionValid = false;
      }
    });
    return productsFiltered;
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateProducts();
  }

  onChangeCategoryForPagination() {
    this.pageSize = 3;
    this.currentPage = 0;
    this.updateProducts();
    this.paginator.firstPage();

  }

  updateProducts() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.productsFiltered = this.productsFilteredforPagination.slice(
      startIndex,
      endIndex
    );
  }
}
