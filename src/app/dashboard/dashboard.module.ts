import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { PasswordComponent } from './components/password/password.component';


@NgModule({
  declarations: [ProfileComponent, DashboardHomeComponent, PasswordComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
