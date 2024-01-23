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
import { BrandsListComponent } from './contexts/backoffice/catalogs/brands/brands-list/brands-list.component';
import { CustomersListComponent } from './contexts/backoffice/catalogs/customers/customers-list/customers-list.component';
import { CustomersFormComponent } from './contexts/backoffice/catalogs/customers/customers-form/customers-form.component';
import { RegisterComponent } from './core/modules/auth/register/register.component';
import { CagtegoriesListComponent } from './contexts/backoffice/catalogs/categories/cagtegories-list/cagtegories-list.component';
import { CagtegoriesFormComponent } from './contexts/backoffice/catalogs/categories/cagtegories-form/cagtegories-form.component';
import { EmployeesListComponent } from './contexts/backoffice/catalogs/employees/employees-list/employees-list.component';
import { EmployeesFormComponent } from './contexts/backoffice/catalogs/employees/employees-form/employees-form.component';
import { UsersListComponent } from './contexts/backoffice/catalogs/users/users-list/users-list.component';
import { UsersFormComponent } from './contexts/backoffice/catalogs/users/users-form/users-form.component';
import { RolesListComponent } from './contexts/backoffice/catalogs/roles/roles-list/roles-list.component';
import { RolesFormComponent } from './contexts/backoffice/catalogs/roles/roles-form/roles-form.component';
import { BrandsFormComponent } from './contexts/backoffice/catalogs/brands/brands-form/brands-form.component';
import { ProfileComponent } from './shared/pages/profile/profile/profile.component';
import { ProfilePersonalFormComponent } from './shared/pages/profile/profile-personal-form/profile-personal-form.component';
import { ProfileAddressesFormComponent } from './shared/pages/profile/profile-addresses-form/profile-addresses-form.component';
import { ProfileAccountFormComponent } from './shared/pages/profile/profile-account-form/profile-account-form.component';
import { ReportByMonthComponent } from './contexts/backoffice/reports/report-by-month/report-by-month.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: RegisterComponent},
  {path: 'logout', component: LogoutComponent},

  {path: 'perfil', component: ProfileComponent},
  {path: 'perfil/personal', component: ProfilePersonalFormComponent},
  {path: 'perfil/direcciones', component: ProfileAddressesFormComponent},
  {path: 'perfil/cuenta', component: ProfileAccountFormComponent},

  {path: 'home', component: HomeComponent},
  {path: 'home/:id', component: HomeComponent},
  {path: 'producto/:id', component: ProductDetailsComponent},
  {path: 'productos/por-categoria/:id', component: ProductsByCategoryComponent},
  {path: 'productos/en-oferta', component: ProductsOnOfferComponent},
  {path: 'landing-page', component: LandingPageComponent},
  // {path: 'ofertas', redirectTo: '/inicio/:id', pathMatch: 'full'},

  {path: 'mis-favoritos', component: MyFavoritesComponent},
  {path: 'mis-compras', component: MyPurchasesComponent},
  {path: 'mi-compra/:id', component: PurchaseComponent},
  {path: 'mi-carrito', component: CartComponent},
  {path: 'tipo-de-envio', component: ShippingTypeComponent},
  {path: 'resumen-de-la-orden', component: OrderResumeComponent},

  {path: 'dashboard', component: DashboardComponent},

  {path: 'admin/clientes', component: CustomersListComponent},
  {path: 'admin/clientes/nuevo', component: CustomersFormComponent},
  {path: 'admin/cliente/editar/:id', component: CustomersFormComponent},

  {path: 'admin/categorias', component: CagtegoriesListComponent},
  {path: 'admin/categorias/nuevo', component: CagtegoriesFormComponent},
  {path: 'admin/categorias/editar/:id', component: CagtegoriesFormComponent},


  {path: 'admin/productos', component: ProductsListComponent},
  {path: 'admin/productos/altas', component: ProductsFormComponent},
  {path: 'admin/productos/forma/:id', component: ProductsFormComponent},

  {path: 'admin/ordenes', component: OrdersListComponent},
  {path: 'admin/orden/:id', component: OrdersDetailsComponent},

  {path: 'admin/marcas', component: BrandsListComponent},
  {path: 'admin/marcas/nuevo', component: BrandsFormComponent},
  {path: 'admin/marcas/editar/:id', component: BrandsFormComponent},

  {path: 'admin/sistema/empleados', component: EmployeesListComponent},
  {path: 'admin/sistema/empleados/editar/:id', component: EmployeesFormComponent},
  {path: 'admin/sistema/empleados/nuevo', component: EmployeesFormComponent},

  {path: 'admin/sistema/roles', component: RolesListComponent},
  {path: 'admin/sistema/roles/nuevo', component: RolesFormComponent},
  {path: 'admin/sistema/roles/editar/:id', component: RolesFormComponent},

  {path: 'admin/sistema/usuarios', component: UsersListComponent},
  {path: 'admin/sistema/usuarios/editar/:id', component: UsersFormComponent},
  // {path: 'admin/sistema/usuarios/nuevo', component: UsersFormComponent},
  {path: 'admin/reportes/por-mes', component: ReportByMonthComponent},


  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
