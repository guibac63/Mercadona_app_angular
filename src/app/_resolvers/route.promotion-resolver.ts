
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs';
import { PromotionService } from '../_services/promotion.service';

export const RoutePromotionResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  promotionService: PromotionService = inject(PromotionService)
): Observable<{}> =>
  promotionService.getPromotionById(route.paramMap.get('id')).pipe(
    catchError((err) => {
      return of('No data' + err);
    })
  );
