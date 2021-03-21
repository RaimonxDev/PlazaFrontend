import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent  } from './components/post/post.component';
import { HomeBlogComponent } from './components/home-blog/home-blog.component';
import { PostsResolver } from './resolvers/posts.resolver';
import { PostResolver } from './resolvers/post.resolver';


const routes: Routes = [

  { path: '',
    children: [
      { path:'', component:HomeBlogComponent,
        resolve: {
          posts: PostsResolver
        } },

      { path: ':slug', component: PostComponent,
        resolve:{
          post: PostResolver
        }
        ,
       data: {title:'post'}},

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
