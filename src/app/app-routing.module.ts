import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/modules/auth/login/login.component';
import { LandingpageComponent } from './contexts/landingpage/landingpage/landingpage.component';
import { HomeComponent } from './contexts/frontoffice/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'landing-page', component: LandingpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
