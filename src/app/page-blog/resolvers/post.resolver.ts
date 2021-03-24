import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable} from 'rxjs';
import { PostResponse } from "../models/PostResponse";
import { StrapiService } from "../services/strapi.service";
import { SeoService } from '../../shared/services/seo/seo.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PostResolver implements Resolve<PostResponse> {

  constructor (private strapiServices : StrapiService, private _seoServices: SeoService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<PostResponse>{
    return this.strapiServices.getPost(route.paramMap.get('slug')).pipe(
      tap(post => this._seoServices.getTagsForPost(post))
    )
  }
}
