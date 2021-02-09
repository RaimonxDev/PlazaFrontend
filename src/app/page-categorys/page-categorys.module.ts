import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageCategorysRoutingModule } from './page-categorys-routing.module';
import { HomeCategoryComponent } from './components/home-category/home-category.component';


@NgModule({
  declarations: [HomeCategoryComponent],
  imports: [
    CommonModule,
    PageCategorysRoutingModule,
  ]
})
export class PageCategorysModule { }
