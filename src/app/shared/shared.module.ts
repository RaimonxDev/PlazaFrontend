import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconLoaderComponent } from './components/icon-loader/icon-loader.component';
import { E503Component } from './errorsComponent/e503/e503.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    IconLoaderComponent,
    E503Component,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ClickOutsideModule,
    MatProgressBarModule
  ],
  exports : [
    FooterComponent,
    NavbarComponent,
    IconLoaderComponent,
    E503Component,
    ClickOutsideModule,
    MatProgressBarModule
  ]
})
export class SharedModule { }
