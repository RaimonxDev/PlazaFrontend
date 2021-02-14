import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AllCategoryResponse, Post, shortCategoryResponse } from '../models/allCategorysResponse';
import { map, pluck, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CategoryPostResponse } from '../models/categoryPostResponse';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private allCategorys = environment.endPointAllCategorys
  constructor(private _http: HttpClient) { }

  getAllCategory(): Observable<shortCategoryResponse[]> {
    return this._http.get<AllCategoryResponse[]>(`${this.allCategorys}`).pipe(
      map( (data)=> {
        return data.map( ( {id,name_category,image:{name,url},posts} ) => {
          return {
            id,
            name_category,
            image:{
              name,
              url
            },
            posts
          }
        })
      })
    )
  }

  getPostsOfCategory (nameCategory){
    return this._http.get<CategoryPostResponse[]>(`http://localhost:1337/categories?name_category=${nameCategory}`).pipe(
      // map 1: extrae posts de la respuesta
      // map 2: enviamos un of para emitir cada valor por separado
      // switchMap: Se subscribe al of emitido y devolvemos 1 array con todos los posts{}
      map( (data)=> {
        return data.map( ({posts}) => posts)
      } ),
      map(dataPosts => of(...dataPosts)),
      switchMap(posts => posts)
    )
  }
}
