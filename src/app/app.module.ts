import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarModule } from './core/modules/navbar/navbar.module';
import { FrontofficeModule } from './contexts/frontoffice/frontoffice.module';
import { AuthModule } from './core/modules/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './shared/pages/logout/logout.component';
import { NotfoundComponent } from './shared/pages/notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { CookieService } from "ngx-cookie-service";
import { BackofficeModule } from './contexts/backoffice/backoffice.module';
import { PageBarComponent } from './shared/components/page-bar/page-bar.component';
import { ProfileComponent } from './shared/pages/profile/profile/profile.component';
import { ProfilePersonalFormComponent } from './shared/pages/profile/profile-personal-form/profile-personal-form.component';
import { ProfileAccountFormComponent } from './shared/pages/profile/profile-account-form/profile-account-form.component';
import { ProfileAddressesFormComponent } from './shared/pages/profile/profile-addresses-form/profile-addresses-form.component';
import { PhonePipe } from './core/pipes/phone.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    NotfoundComponent,
    ProfileComponent,
    ProfilePersonalFormComponent,
    ProfileAccountFormComponent,
    ProfileAddressesFormComponent,
    PhonePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarModule,
    FrontofficeModule,
    // BackofficeModule,
    AuthModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    PhonePipe,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
