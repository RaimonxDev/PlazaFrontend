import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconLoaderComponent } from './components/icon-loader/icon-loader.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    IconLoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports : [
    FooterComponent,
    NavbarComponent,
    IconLoaderComponent,
  ]
})
export class SharedModule { }
