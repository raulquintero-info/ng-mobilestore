import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsListComponent } from './catalogs/products/products-list/products-list.component';
import { ProductsFormComponent } from './catalogs/products/products-form/products-form.component';
import { RouterModule } from '@angular/router';
import { OrdersListComponent } from './catalogs/orders/orders-list/orders-list.component';
import { OrdersDetailsComponent } from './catalogs/orders/orders-details/orders-details.component';
import { PurchasesModule } from 'src/app/core/modules/purchases/purchases.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductsListComponent,
    ProductsFormComponent,
    OrdersListComponent,
    OrdersDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    PurchasesModule,
  ]
})
export class BackofficeModule { }
