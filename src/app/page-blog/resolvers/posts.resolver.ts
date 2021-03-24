import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable,} from 'rxjs';
import { StrapiService } from '../services/strapi.service';
import { PostResponse } from '../models/PostResponse';

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<PostResponse[]> {

  constructor(private _strapiService: StrapiService ){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostResponse[]> {
    return this._strapiService.getPosts()
  }
}
