import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartTotalComponent } from './cart-total/cart-total.component';
import {RouterModule} from '@angular/router';
import { ShippingTypeComponent } from './shipping-type/shipping-type.component';
import { CartTotalToFinishComponent } from './cart-total-to-finish/cart-total-to-finish.component';



@NgModule({
  declarations: [
    CartItemComponent,
    CartTotalComponent,
    ShippingTypeComponent,
    CartTotalToFinishComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    CartItemComponent,
    CartTotalComponent,
    CartTotalToFinishComponent,
  ]
})
export class CheckoutModule { }
