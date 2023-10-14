import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service';
import { CategoryAdminComponent } from './category-admin/category-admin.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { CategoryAdminFormComponent } from './category-admin-form/category-admin-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ShowCategoryDetailsComponent } from './show-category-details/show-category-details.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PromotionAdminComponent } from './promotion-admin/promotion-admin.component';
import { PromotionAdminFormComponent } from './promotion-admin-form/promotion-admin-form.component';
import { ShowPromotionDetailsComponent } from './show-promotion-details/show-promotion-details.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { DatePipe } from '@angular/common';
import { ProductAdminFormComponent } from './product-admin-form/product-admin-form.component';
import { MatSelectModule } from '@angular/material/select';
import { ShowProductDetailsComponent } from './show-product-details/show-product-details.component';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { DateRangeValidatorDirective } from './_directives/date-range-validator.directive';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { MercadonaProductComponent } from './mercadona-product/mercadona-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    HeaderComponent,
    CategoryAdminComponent,
    ProductAdminComponent,
    CategoryAdminFormComponent,
    ShowCategoryDetailsComponent,
    PromotionAdminComponent,
    PromotionAdminFormComponent,
    ShowPromotionDetailsComponent,
    ProductAdminFormComponent,
    ShowProductDetailsComponent,
    DateRangeValidatorDirective,
    MentionsLegalesComponent,
    MercadonaProductComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule,
    MatSelectModule,
    MatSortModule,
    MatGridListModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    UserService,
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
