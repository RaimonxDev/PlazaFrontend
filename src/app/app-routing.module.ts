import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./pageHome/home.module').then(m => m.HomeModule),data: {title:'home'} },
  {path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule),data: {title:'about'} },
  {path: 'blog', loadChildren: () => import('./page-blog/page-blog.module').then(m => m.PageBlogModule),data: {title:'blog'} },
  {path: '**', redirectTo:'home', pathMatch: 'full'},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
