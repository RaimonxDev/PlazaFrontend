import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent  } from './components/post/post.component';
import { HomeBlogComponent } from './components/home-blog/home-blog.component';
import { PostResolve  } from "./resolvers/post.resolver";

const routes: Routes = [

  { path: '',
    children: [
      { path:'', component:HomeBlogComponent },

      { path: 'post/:slug', component: PostComponent,
       data: {title:'post'},
       resolve: {post: PostResolve} },

      { path: '**', redirectTo: '/blog', pathMatch: 'prefix'}
    ]},


];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PageBlogRoutingModule { }
