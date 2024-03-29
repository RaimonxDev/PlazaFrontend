import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AboutResponse } from './models/aboutResponse'

@Injectable()
export class AboutService {
  APIurl:string = environment.APIurl

  constructor(private _http: HttpClient)  { }

  getContentAbout () : Observable<AboutResponse>{
    return this._http.get<AboutResponse>(`${this.APIurl}/about`)
  }
}
