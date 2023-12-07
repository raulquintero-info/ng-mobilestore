import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { ProductsComponent } from './products/products.component';
import { FavoriteSocialBarComponent } from './favorite-social-bar/favorite-social-bar.component';



@NgModule({
  declarations: [
    ProductComponent,
    ProductcardComponent,
    ProductsComponent,
    FavoriteSocialBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent,
    ProductcardComponent
  ]
})
export class ProductsModule { }
