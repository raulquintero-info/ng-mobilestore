import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/modules/auth/login/login.component';
import { LandingPageComponent } from './contexts/landingpage/landingpage/landingpage.component';
import { HomeComponent } from './contexts/frontoffice/home/home.component';
import { LogoutComponent } from './shared/pages/logout/logout.component';
import { ProductsByCategoryComponent } from './contexts/frontoffice/products/products-by-category/products-by-category.component';
import { ProductsOnOfferComponent } from './contexts/frontoffice/products/products-on-offer/products-on-offer.component';
import { ProductDetailsComponent } from './contexts/frontoffice/products/product-details/product-details.component';
import { CartComponent } from './contexts/frontoffice/checkout/cart/cart.component';
import { MyFavoritesComponent } from './contexts/frontoffice/favorites/my-favorites/my-favorites.component';
import { MyPurchasesComponent } from './contexts/frontoffice/purchases/my-purchases/my-purchases.component';
import { DashboardComponent } from './contexts/backoffice/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'home/:id', component: HomeComponent},
  {path: 'producto/:id', component: ProductDetailsComponent},
  {path: 'productos/por-categoria/:id', component: ProductsByCategoryComponent},
  {path: 'productos/en-oferta', component: ProductsOnOfferComponent},
  {path: 'landing-page', component: LandingPageComponent},
  // {path: 'ofertas', redirectTo: '/inicio/:id', pathMatch: 'full'},

  {path: 'mi-carrito', component: CartComponent},
  {path: 'mis-favoritos', component: MyFavoritesComponent},
  {path: 'mis-compras', component: MyPurchasesComponent},

  {path: 'dashboard', component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
