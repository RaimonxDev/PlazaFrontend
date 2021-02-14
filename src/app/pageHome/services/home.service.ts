import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map, } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthorInfoResponse, } from '../models/authorInfoResponse';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  // private urlSites:string = environment.urlSites
  // private portSites: number = environment.portSites
  constructor( private _http: HttpClient) {  }

  // Solucionar Ruta en duro
  getInfoAuthor () {
     return this._http.get<AuthorInfoResponse[]>(`http://localhost:1337/authors?email=ramonmartinezcordero@gmail.com`)
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
