import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PostResponse  } from "../models/ArticlesResponse";

@Injectable()

export class StrapiService {
  // url y port del sitio web
  urlSites:string = environment.urlSites
  portSites: number = environment.portSites

  constructor(private _http: HttpClient) { }

  getPosts() {
    return this._http.get<PostResponse[]>(`${this.urlSites}:${this.portSites}/posts`)
  }

  getOnlyPost(slug: string){
    return this._http.get<PostResponse[]>(`${this.urlSites}:${this.portSites}/posts/?slug=${slug}`)
  }

}

