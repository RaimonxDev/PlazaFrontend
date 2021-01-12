import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';


import { AboutService } from './services/about.service';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    MarkdownModule.forRoot(),
    CommonModule,
    AboutRoutingModule,
    HttpClientModule
  ],
  providers:[AboutService]
})
export class AboutModule { }
