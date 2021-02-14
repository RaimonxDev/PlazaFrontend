import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs';
import { shortCategoryResponse } from '../../models/allCategorysResponse';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.scss']
})
export class HomeCategoryComponent implements OnInit {

  urlImages = environment.urlImages
  categorys$: Observable<shortCategoryResponse[]>;
  constructor( private _servicesCategory: CategoryService,
              private _router: Router) { }

  ngOnInit(): void {
    this.categorys$ = this._servicesCategory.getAllCategory()
  }

  getPostOfCategory(nameCategory: string){
    this._router.navigate(['categories/', nameCategory])
  }

}
