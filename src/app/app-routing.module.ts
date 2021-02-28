import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ProfileGuard } from '@shared/guards/profile/profile.guard';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'home', loadChildren:    () => import('./pageHome/home.module').then(m => m.HomeModule),data: {title:'home'} },
  { path: 'about', loadChildren:   () => import('./about/about.module').then(m => m.AboutModule),data: {title:'about'} },
  { path: 'blog', loadChildren:    () => import('./page-blog/page-blog.module').then(m => m.PageBlogModule),data: {title:'blog'} },
  { path: 'categories', loadChildren:    () => import('./page-categorys/page-categorys.module').then(m => m.PageCategorysModule),data: {title:'categories'} },
  // { path: 'auth', loadChildren:    () => import('./auth/auth.module').then(m => m.AuthModule),data: {title:'auth'} },
  // { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),data: {title:'dashboard'},
  //  canActivate: [ProfileGuard],
  //  canLoad:     [ProfileGuard]

  // },
  { path: '**', redirectTo:'home', pathMatch: 'full'},

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
