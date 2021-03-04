import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBlogRoutingModule } from './page-blog-routing.module';

import { MarkdownModule } from "ngx-markdown";
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';

// Discuss
import { DisqusModule } from 'ngx-disqus';

// Services
import { StrapiService } from "./services/strapi.service";
// Resolver
import { PostResolve } from "./resolvers/post.resolver";

// Pipes
import { PipesModule } from "../pipes/pipes.module"

// Components
import { PostComponent } from './components/post/post.component';
import { HomeBlogComponent } from './components/home-blog/home-blog.component';
import { AuthorComponent } from './components/author/author.component';
import { BreadcrumbsComponent } from "./components/breadcrumbs/breadcrumbs.component";


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
    DisqusModule,
    SharedModule,
  ],
  providers:[
    StrapiService,
    PostResolve

  ]
})
export class PageBlogModule { }
