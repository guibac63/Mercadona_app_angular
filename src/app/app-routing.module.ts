import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './_auth/auth.guard';
import { CategoryAdminComponent } from './category-admin/category-admin.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { CategoryAdminFormComponent } from './category-admin-form/category-admin-form.component';
import { RouteCategoryResolver } from './_resolvers/route.category-resolver';
import { PromotionAdminComponent } from './promotion-admin/promotion-admin.component';
import { PromotionAdminFormComponent } from './promotion-admin-form/promotion-admin-form.component';
import { RoutePromotionResolver } from './_resolvers/route.promotion-resolver';
import { ProductAdminFormComponent } from './product-admin-form/product-admin-form.component';
import { RouteProductResolver } from './_resolvers/route.product-resolver';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { MercadonaProductComponent } from './mercadona-product/mercadona-product.component';
import { RouteAllProductsResolver } from './_resolvers/route.productsAll-resolver';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  {
    path: 'all-our-products',
    component: MercadonaProductComponent,
    resolve: { routeAllProductsResolver: RouteAllProductsResolver },
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin/category_admin',
    component: CategoryAdminComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin/category_admin/form',
    component: CategoryAdminFormComponent,
    canActivate: [authGuard],
    resolve: { routeCategoryResolver: RouteCategoryResolver },
  },
  {
    path: 'admin/promotion_admin',
    component: PromotionAdminComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin/promotion_admin/form',
    component: PromotionAdminFormComponent,
    canActivate: [authGuard],
    resolve: { routePromotionResolver: RoutePromotionResolver },
  },
  {
    path: 'admin/product_admin',
    component: ProductAdminComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin/product_admin/form',
    component: ProductAdminFormComponent,
    canActivate: [authGuard],
    resolve: { routeProductResolver: RouteProductResolver },
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
