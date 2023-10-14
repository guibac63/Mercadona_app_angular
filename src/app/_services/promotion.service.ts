import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Promotion } from '../_model/promotion.model';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  public addPromotion(promotion: Promotion) {
    return this.httpClient.post<Promotion>(
      this.baseUrl + 'api/promotion/add',
      promotion
    );
  }

  public getAllPromotions() {
    return this.httpClient.get<Promotion[]>(
      this.baseUrl + 'api/promotion/getAll'
    );
  }

  public deletePromotion(promotionId: number) {
    return this.httpClient.delete(
      this.baseUrl + 'api/promotion/delete/' + promotionId
    );
  }

  public getPromotionById(promotionId: any) {
    if (promotionId) {
      return this.httpClient.get(
        this.baseUrl + 'api/promotion/get/' + promotionId
      );
    } else {
      return of([]);
    }
  }
}
