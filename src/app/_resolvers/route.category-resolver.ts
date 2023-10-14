import { CategoryService } from "../_services/category.service";
import { ActivatedRouteSnapshot,ResolveFn,RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";
import { Observable,of } from "rxjs";
import { map,catchError } from "rxjs";

export const RouteCategoryResolver:ResolveFn<any> = (
  route:ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  categoryService:CategoryService = inject(CategoryService)
): Observable<{}> => categoryService.getCategoryById(route.paramMap.get("id")).pipe(
  catchError((err)=>{
    return of('No data' + err)
  })
)

