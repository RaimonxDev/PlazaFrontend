import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable} from 'rxjs';
import { PostResponse } from "../models/PostResponse";
import { StrapiService } from "../services/strapi.service";

@Injectable()

export class PostResolve implements Resolve<Observable<any>> {

  constructor (private strapiServices : StrapiService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<PostResponse>{
    return this.strapiServices.getOnlyPost(route.paramMap.get('slug'))
  }
}
