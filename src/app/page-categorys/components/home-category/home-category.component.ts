import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs';
import { shortCategoryResponse } from '../../models/allCategorysResponse';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { SeoService } from '../../../shared/services/seo/seo.service';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.scss']
})
export class HomeCategoryComponent implements OnInit, OnDestroy {

  APIurl = environment.APIurl
  categorys$: Observable<shortCategoryResponse[]>;
  constructor( private _servicesCategory: CategoryService,
              private _router: Router,
              private _seoServices: SeoService) { }

  ngOnInit(): void {
    // pasamos parametro manual debido que la pagina se llama categorias
    this._seoServices.getTagForPage('/categorias')
    this.categorys$ = this._servicesCategory.getAllCategory()
  }

  getPostOfCategory(nameCategory: string){
    this._router.navigate(['categories/', nameCategory])
  }

  ngOnDestroy(){
    this._seoServices.deleteMetaTags()
  }

}
