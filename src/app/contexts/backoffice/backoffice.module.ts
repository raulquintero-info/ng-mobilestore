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
import { PageBarComponent } from 'src/app/shared/components/page-bar/page-bar.component';
import { BrandsListComponent } from './catalogs/brands/brands-list/brands-list.component';
import { BrandsFormComponent } from './catalogs/brands/brands-form/brands-form.component';
import { CustomersListComponent } from './catalogs/customers/customers-list/customers-list.component';
import { CustomersFormComponent } from './catalogs/customers/customers-form/customers-form.component';
import { CagtegoriesListComponent } from './catalogs/categories/cagtegories-list/cagtegories-list.component';
import { CagtegoriesFormComponent } from './catalogs/categories/cagtegories-form/cagtegories-form.component';
import { EmployeesListComponent } from './catalogs/employees/employees-list/employees-list.component';
import { EmployeesFormComponent } from './catalogs/employees/employees-form/employees-form.component';
import { UsersListComponent } from './catalogs/users/users-list/users-list.component';
import { UsersFormComponent } from './catalogs/users/users-form/users-form.component';
import { RolesListComponent } from './catalogs/roles/roles-list/roles-list.component';
import { RolesFormComponent } from './catalogs/roles/roles-form/roles-form.component';
import { ReportByMonthComponent } from './reports/report-by-month/report-by-month.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductsListComponent,
    ProductsFormComponent,
    OrdersListComponent,
    OrdersDetailsComponent,
    PageBarComponent,
    BrandsListComponent,
    BrandsFormComponent,
    CustomersListComponent,
    CustomersFormComponent,
    CagtegoriesListComponent,
    CagtegoriesFormComponent,
    EmployeesListComponent,
    EmployeesFormComponent,
    UsersListComponent,
    UsersFormComponent,
    RolesListComponent,
    RolesFormComponent,
    ReportByMonthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PurchasesModule,
  ]
})
export class BackofficeModule { }
