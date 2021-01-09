import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./pageHome/home.module').then(m => m.HomeModule) },
  {path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  {path: 'blog', loadChildren: () => import('./page-blog/page-blog.module').then(m => m.PageBlogModule) },
  {path: '**', redirectTo:'home', pathMatch: 'full'},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
