import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from "ngx-markdown";
import { HttpClientModule } from '@angular/common/http';

// Services
import { StrapiService } from "./services/strapi.service";

// Pipes

import {PipesModule} from "../pipes/pipes.module"

import { PageBlogRoutingModule } from './page-blog-routing.module';
import { PageBlogComponent } from './page-blog.component';
import { ArticleComponent } from './components/article/article.component';


@NgModule({
  declarations: [
    PageBlogComponent,
    ArticleComponent],
  imports: [
    MarkdownModule.forRoot(),
    CommonModule,
    PageBlogRoutingModule,
    HttpClientModule,
    PipesModule
  ],
  providers:[
    StrapiService
  ]
})
export class PageBlogModule { }
