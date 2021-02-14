import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCategoryComponent } from './components/home-category/home-category.component';
import { CategoryService } from './services/category.service';
import { PipesModule } from '../pipes/pipes.module';
import { CategoryComponent } from './components/category/category.component';


const routes: Routes = [

  { path: '',
    children:[
      {path: '', component: HomeCategoryComponent},
      {path: ':name', component: CategoryComponent}
    ]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
    PipesModule
  ],
  providers: [CategoryService]
})
export class PageCategorysRoutingModule { }
