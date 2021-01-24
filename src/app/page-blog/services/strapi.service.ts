import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Handle error
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { handleHttpResponseError } from "@utils/http-errors";


import { environment } from 'src/environments/environment';
import { PostResponse  } from "../models/PostResponse";

@Injectable()

export class StrapiService {
  // url y port del sitio web
  urlSites:string = environment.urlSites
  portSites: number = environment.portSites

  constructor(private _http: HttpClient) { }

  getPosts() {
    return this._http.get<PostResponse[]>(`${this.urlSites}:${this.portSites}/posts`)
    .pipe(
      catchError(handleHttpResponseError)
    )
  }

  getOnlyPost(slug: string) : Observable <PostResponse>{
    return this._http.get<PostResponse[]>(`${this.urlSites}:${this.portSites}/posts/?slug=${slug}`)
      .pipe(
        catchError(handleHttpResponseError),
        map((data)=> {return data[0]})
      );
  }

}

