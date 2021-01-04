import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizerUrlPipe } from './sanitezer-url.pipe';



@NgModule({
  declarations: [SanitizerUrlPipe],
  imports: [
    CommonModule
  ],
  exports: [SanitizerUrlPipe]
})
export class PipesModule { }
