import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map, } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthorInfoResponse, } from '../models/authorInfoResponse';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private urlWebsite: string = environment.urlWebsite
  constructor( private _http: HttpClient) {  }

  // Solucionar Ruta en duro
  getInfoAuthor () {
     return this._http.get<AuthorInfoResponse[]>(`${this.urlWebsite}/authors?email=ramon@plazafrontend.io`)
      .pipe(
        map( data => {
          return data.map(({id,first_name,last_name,about_author,email,picture_author:{url}}) => {
            return {
              id,
              first_name,
              last_name,
              about_author,
              email,
              picture_author : {
                url
              }
            }
          } )
        })
        )
   }





}
