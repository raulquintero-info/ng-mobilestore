import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseTotalComponent } from './purchase-total/purchase-total.component';
import { PurchaseItemComponent } from './purchase-item/purchase-item.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PurchaseTotalComponent,
    PurchaseItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    PurchaseTotalComponent,
    PurchaseItemComponent
  ]
})
export class PurchasesModule { }
