import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PasswordComponent } from './components/password/password.component';

const routes: Routes = [{
  path: '',
  component: DashboardHomeComponent,
  children:[
    { path : '', redirectTo: 'profile', pathMatch:'full' },
    { path: 'profile' , component: ProfileComponent},
    { path: 'password' , component: PasswordComponent}
  ]
  },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
