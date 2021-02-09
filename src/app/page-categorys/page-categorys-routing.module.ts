import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCategoryComponent } from './components/home-category/home-category.component';

const routes: Routes = [

  { path: '',
    component: HomeCategoryComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageCategorysRoutingModule { }
