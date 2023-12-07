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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarModule,
    FrontofficeModule,
    AuthModule,
    RouterModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
