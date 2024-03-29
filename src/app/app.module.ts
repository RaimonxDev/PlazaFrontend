import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './page-home/home.module';

import { DISQUS_SHORTNAME } from 'ngx-disqus';
import { ButtonUpComponent } from './shared/components/button-up/button-up.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonUpComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HomeModule,
  ],
  providers: [
    { provide: DISQUS_SHORTNAME, useValue: 'plazafront-end' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
