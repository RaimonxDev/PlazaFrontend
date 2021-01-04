import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostResponse  } from "../models/ArticlesResponse";

@Injectable()

export class StrapiService {

  constructor(private _http: HttpClient) { }

  getArticles() {
    return this._http.get<PostResponse[]>('http://localhost:1337/posts')
  }

}

