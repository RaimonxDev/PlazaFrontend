import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageBlogRoutingModule } from './page-blog-routing.module';
import { PageBlogComponent } from './page-blog.component';
import { ArticleComponent } from './components/article/article.component';


@NgModule({
  declarations: [
    PageBlogComponent,
    ArticleComponent],
  imports: [
    CommonModule,
    PageBlogRoutingModule
  ]
})
export class PageBlogModule { }
