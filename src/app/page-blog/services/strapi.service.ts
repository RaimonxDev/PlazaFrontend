import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Handle error
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, delay, map, tap } from "rxjs/operators";
import { handleHttpResponseError } from "@utils/http-errors";


import { environment } from 'src/environments/environment';
import { PostResponse  } from "../models/PostResponse";
import { Post } from '../../page-categorys/models/allCategorysResponse';

@Injectable()

export class StrapiService {
  // url y port del sitio web
  APIurl:string = environment.APIurl

  private _posts: BehaviorSubject<PostResponse[]>
  private _post: BehaviorSubject<PostResponse>


  // Getter and Setter
  get posts$ (): Observable<PostResponse[]>{
    return this._posts.asObservable()
  }

  get post$ (): Observable<PostResponse>{
    return this._post.asObservable()
  }

  constructor( private _http: HttpClient ) {

    // set Default
    this._posts = new BehaviorSubject<PostResponse[]>([])
    this._post =  new BehaviorSubject<PostResponse>(null)

   }

  getPosts() {
    return this._http.get<PostResponse[]>(`${this.APIurl}/posts`,{
      params: {
        '_sort':'created_at:DESC'
      }
    })
    .pipe(
      tap( posts => this._posts.next(posts) ),
      catchError(handleHttpResponseError)
    )
  }

  getPost(slug: string) : Observable <PostResponse>{
    return this._http.get<PostResponse[]>(`${this.APIurl}/posts/?slug=${slug}`)
      .pipe(
        catchError(handleHttpResponseError),
        map((data) => {return data[0]}),
        tap(post => this._post.next(post))
      );
  }

}

