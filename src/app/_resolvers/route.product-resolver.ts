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

export const RouteProductResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  productService: ProductService = inject(ProductService),
  imageService: ImageProcessingService = inject(ImageProcessingService)
) => { 
  if (route.paramMap.get('id')){
    return productService
      .getProductById(route.paramMap.get('id'))
      .pipe(map((p) => imageService.createImages(p)));
  }else{
    return {}
  }
}


  

  
