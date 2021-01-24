import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { HomeService } from "./services/home.service";

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent} from './componets/home/home.component';
import { HeaderComponent } from './componets/header/header.component'



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  providers:[HomeService]
})
export class HomeModule { }
