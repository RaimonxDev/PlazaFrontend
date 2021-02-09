import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from "ngx-markdown";
import { HttpClientModule } from '@angular/common/http';

// Discuss

// Services
import { StrapiService } from "./services/strapi.service";
// Resolver
import { PostResolve } from "./resolvers/post.resolver";

// Pipes
import {PipesModule} from "../pipes/pipes.module"

// Components
import { PageBlogRoutingModule } from './page-blog-routing.module';
import { PostComponent } from './components/post/post.component';
import { HomeBlogComponent } from './components/home-blog/home-blog.component';
import { AuthorComponent } from './components/author/author.component';
import { BreadcrumbsComponent } from "./components/breadcrumbs/breadcrumbs.component";
import { DisqusModule } from 'ngx-disqus';



@NgModule({
  declarations: [
    PostComponent,
    HomeBlogComponent,
    AuthorComponent,
    BreadcrumbsComponent
  ],
  imports: [
    MarkdownModule.forRoot(),
    CommonModule,
    PageBlogRoutingModule,
    HttpClientModule,
    PipesModule,
    DisqusModule

  ],
  providers:[
    StrapiService,
    PostResolve

  ]
})
export class PageBlogModule { }
