import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ProductsModule } from 'src/app/core/modules/products/products.module';
import { ProductsByCategoryComponent } from './products/products-by-category/products-by-category.component';
import { ProductsOnOfferComponent } from './products/products-on-offer/products-on-offer.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CartComponent } from './checkout/cart/cart.component';
import { CheckoutModule } from 'src/app/core/modules/checkout/checkout.module';
import { MyFavoritesComponent } from './favorites/my-favorites/my-favorites.component';
import { RouterModule } from '@angular/router';
import { FavoritesModule } from 'src/app/core/modules/favorites/favorites.module';
import { MyPurchasesComponent } from './purchases/my-purchases/my-purchases.component';
import { ShippingTypeComponent } from './checkout/shipping-type/shipping-type.component';
import { PurchaseComponent } from './purchases/purchase/purchase.component';
import { PurchasesModule } from 'src/app/core/modules/purchases/purchases.module';
import { OrderResumeComponent } from './checkout/order-resume/order-resume.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductsByCategoryComponent,
    ProductsOnOfferComponent,
    ProductDetailsComponent,
    CartComponent,
    MyFavoritesComponent,
    MyPurchasesComponent,
    ShippingTypeComponent,
    PurchaseComponent,
    OrderResumeComponent,

    // PhonePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    ProductsModule,
    CheckoutModule,
    FavoritesModule,
    FormsModule,
    PurchasesModule
  ]
})
export class FrontofficeModule { }
