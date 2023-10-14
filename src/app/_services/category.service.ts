import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../_model/category.model';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  baseUrl = environment.baseUrl;

  requestHeaders = new HttpHeaders()
    .set('No-Auth', 'True')
    .set('Access-Control-Allow-Origin', '*');

  options = {
    headers: this.requestHeaders,
  };

  constructor(private httpClient: HttpClient) {}

  public addCategory(category: Category) {
    return this.httpClient.post<Category>(
      this.baseUrl + 'api/category/add',
      category
    );
  }

  public getAllCategories() {
    return this.httpClient.get<Category[]>(
      this.baseUrl + 'api/category/getAll',this.options
    );
  }

  public deleteCategory(categoryId: number) {
    return this.httpClient.delete(
      this.baseUrl + 'api/category/delete/' + categoryId
    );
  }

  public getCategoryById(categoryId: any) {
    if (categoryId) {
      return this.httpClient.get(
        this.baseUrl + 'api/category/get/' + categoryId
      );
    } else {
      return of([]);
    }
  }
}
