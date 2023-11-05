import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs';
import { ProductService } from '../_services/product-service';
import { ImageProcessingService } from '../_services/image-processing-service';
import { Product } from '../_model/product.model';

export const RouteAllProductsResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  productService: ProductService = inject(ProductService),
  imageService: ImageProcessingService = inject(ImageProcessingService)
) => {
  return productService.getAllProducts().pipe(
    map((data)=> {
      const products = data.data;
      console.log(products)
      const transformedProducts = products.map((product) => {
        imageService.createImages(product)
        return product;
      });
      return transformedProducts
    })
    )
};