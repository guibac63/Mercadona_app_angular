import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_model/product.model';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  baseUrl = environment.baseUrl;

  requestHeaders = new HttpHeaders()
    .set('No-Auth', 'True')
    .set('Access-Control-Allow-Origin', '*');

  options = {
    headers: this.requestHeaders,
  };

  constructor(private httpClient: HttpClient) {}

  public addProduct(product: FormData) {
    return this.httpClient.post<Product>(
      this.baseUrl + 'api/product/add',
      product
    );
  }

  public getAllProducts() {
    return this.httpClient.get<any>(
      this.baseUrl + 'api/product/getAll',
      this.options
    );
  }

  public deleteProduct(productId: number) {
    return this.httpClient.delete(
      this.baseUrl + 'api/product/delete/' + productId
    );
  }

  public getProductById(productId: any) {
    if (productId) {
      return this.httpClient.get(
        this.baseUrl + 'api/product/get/' + productId
      );
    } else {
      return of([]);
    }
  }

  public modifyProductDiscountedPrice(promotionId: any) {
    if (promotionId) {
      return this.httpClient.get(
        this.baseUrl + 'api/product/modifyProductDiscountedPrice/' +
          promotionId
      );
    } else {
      return of([]);
    }
  }
}
