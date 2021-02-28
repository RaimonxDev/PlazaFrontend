import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent  } from './components/post/post.component';
import { HomeBlogComponent } from './components/home-blog/home-blog.component';

const routes: Routes = [

  { path: '',
    children: [
      { path:'', component:HomeBlogComponent },

      { path: ':slug', component: PostComponent,
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
