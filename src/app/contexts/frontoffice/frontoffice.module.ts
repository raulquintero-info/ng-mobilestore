import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ]
})
export class FrontofficeModule { }
