import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageBlogRoutingModule } from './page-blog-routing.module';
import { PageBlogComponent } from './page-blog.component';


@NgModule({
  declarations: [PageBlogComponent],
  imports: [
    CommonModule,
    PageBlogRoutingModule
  ]
})
export class PageBlogModule { }
