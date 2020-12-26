import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageBlogComponent } from './page-blog.component';
import { ArticleComponent  } from './components/article/article.component';

const routes: Routes = [

  {path: '', component: PageBlogComponent },

  {path: 'article', component: ArticleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageBlogRoutingModule { }
