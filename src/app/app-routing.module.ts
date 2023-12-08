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
import { ShippingTypeComponent } from './contexts/frontoffice/checkout/shipping-type/shipping-type.component';
import { PurchaseComponent } from './contexts/frontoffice/purchases/purchase/purchase.component';
import { OrderResumeComponent } from './contexts/frontoffice/checkout/order-resume/order-resume.component';
import { ProductsListComponent } from './contexts/backoffice/catalogs/products/products-list/products-list.component';
import { NotfoundComponent } from './shared/pages/notfound/notfound.component';
import { ProductsFormComponent } from './contexts/backoffice/catalogs/products/products-form/products-form.component';
import { OrdersListComponent } from './contexts/backoffice/catalogs/orders/orders-list/orders-list.component';
import { OrdersDetailsComponent } from './contexts/backoffice/catalogs/orders/orders-details/orders-details.component';

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

  {path: 'mis-favoritos', component: MyFavoritesComponent},
  {path: 'mis-compras', component: MyPurchasesComponent},
  {path: 'mis-compras/:id', component: PurchaseComponent},
  {path: 'mi-carrito', component: CartComponent},
  {path: 'tipo-de-envio', component: ShippingTypeComponent},
  {path: 'resumen-de-la-orden', component: OrderResumeComponent},

  {path: 'dashboard', component: DashboardComponent},

  {path: 'admin/productos', component: ProductsListComponent},
  {path: 'admin/productos/altas', component: ProductsFormComponent},
  {path: 'admin/productos/forma/:id', component: ProductsFormComponent},

  {path: 'admin/ordenes', component: OrdersListComponent},
  {path: 'admin/ordenes/:id', component: OrdersDetailsComponent},

  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
