import { Component } from '@angular/core';
import { Product } from '../_model/product.model';
import { CategoryService } from '../_services/category.service';
import { ProductService } from '../_services/product-service';
import { ActivatedRoute, Router } from '@angular/router';
import { PromotionService } from '../_services/promotion.service';
import { Category } from '../_model/category.model';
import { Promotion } from '../_model/promotion.model';
import { NgForm } from '@angular/forms';
import { FileHandle } from '../_model/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-admin-form',
  templateUrl: './product-admin-form.component.html',
  styleUrls: ['./product-admin-form.component.css'],
})
export class ProductAdminFormComponent {
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

  categories: Category[];

  promotions: Promotion[];

  selectedCategory: Category[];

  selectedPromotion: Promotion[];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private promotionService: PromotionService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    if (this.actRoute.snapshot.params.id != undefined) {
      this.actRoute.data.subscribe((data) => {
        this.product = data.routeProductResolver;
      });
    }

    this.getAllCategories();
    this.getAllPromotions();
  }

  compareWithCategory(object1: Category, object2: Category) {
    return object1 && object2 && object1.categoryName === object2.categoryName;
  }

  compareWithPromotion(object1: Promotion, object2: Promotion) {
    return (
      object1 && object2 && object1.promotionName === object2.promotionName
    );
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

  public getAllPromotions() {
    this.promotionService.getAllPromotions().subscribe({
      next: (response: any) => {
        this.promotions = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onFileSelected(evt) {
    if (evt.target.files) {
      const file = evt.target.files[0];

      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        ),
      };
      this.product.image = fileHandle;
    }
  }

  addProduct(productForm: NgForm) {
    if (productForm.valid) {
      const productFormData = this.prepareFormData(this.product);
      this.productService.addProduct(productFormData).subscribe({
        next: (response: any) => {
          if (response.status == 200) {
            this.router.navigate(['/admin/product_admin']);
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  prepareFormData(product: Product): FormData {
    const formData = new FormData();

    formData.append(
      'product',
      new Blob([JSON.stringify(product)], { type: 'application/json' })
    );

    if (product.image) {
      formData.append('imageFile', product.image.file, product.image.file.name);
    }
    return formData;
  }

  removeImage() {
    this.product.image = null;
  }

  changeDiscountedPrice(evt) {
    if (this.product.productPrice > 0 && this.product.promotion != null) {
      if(evt.value == 0 || isNaN(this.product.promotion.promotionPercentage)){
        this.product.productDiscountedPrice = 0
      }else{
        let discountedPrice: number =
          this.product.productPrice *
          ((100 - this.product.promotion.promotionPercentage) / 100);
        this.product.productDiscountedPrice =
          Math.round(discountedPrice * 100) / 100;
      }
    }
  }
}
