import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PageCategorysRoutingModule } from './page-categorys-routing.module';
import { HomeCategoryComponent } from './components/home-category/home-category.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './components/category/category.component';
import { StrapiService } from '../page-blog/services/strapi.service';


@NgModule({
  declarations: [HomeCategoryComponent, CategoryComponent],
  imports: [
    CommonModule,
    PageCategorysRoutingModule,
    HttpClientModule
  ],
  providers:[StrapiService]
})
export class PageCategorysModule { }
