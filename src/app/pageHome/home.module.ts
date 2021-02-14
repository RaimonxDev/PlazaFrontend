import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { HomeService } from "./services/home.service";

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent} from './componets/home/home.component';
import { HeaderComponent } from './componets/header/header.component'
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    PipesModule
  ],
  providers:[HomeService]
})
export class HomeModule { }
