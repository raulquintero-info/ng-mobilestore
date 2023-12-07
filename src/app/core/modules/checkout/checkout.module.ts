import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartTotalComponent } from './cart-total/cart-total.component';



@NgModule({
  declarations: [
    CartItemComponent,
    CartTotalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CartItemComponent,
    CartTotalComponent
  ]
})
export class CheckoutModule { }
