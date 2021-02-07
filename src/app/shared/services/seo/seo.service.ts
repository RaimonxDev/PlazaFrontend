import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

import { of, Subscription } from 'rxjs';
import { catchError, map, pluck, take } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
// utils
import { handleHttpResponseError } from '@utils/http-errors';
// Models
import { PostResponse } from 'src/app/page-blog/models/PostResponse';
import { MetaTagsPageResponse, TAGS } from "../../models/MetaTagsPages";


@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private urlSites:string = environment.urlSites
  private portSites: number = environment.portSites

  constructor(  private metaTagService: Meta,
                private titleTag: Title,
                private _http: HttpClient ) { }



  essentialTags(): MetaDefinition[] {
    // tag to facebook
    const fbTitle =       { 'property': 'og:title' },
          fbDescription = { 'property': 'og:description' },
          fbSiteName =    { 'property': 'og:site_name' },
          fbImage =       {'property': 'og:image' },
          fbUrl =         { 'property': 'og:url' },

    // tag to twitter
          twTitle =       { 'name': 'twitter:title' },
          twDescription = { 'name': 'twitter:description' },
          twImage =       {'name': 'twitter:image' },
          twUrl =         {'name': 'twitter:card' };

   return [fbSiteName,fbTitle,fbDescription,fbImage,fbUrl,twTitle,twDescription,twImage,twUrl]
  }

  formatTags(title: string , description: string , image : string = '/uploads/Plaza_Frontend_Logo_65906ca292.svg', url: string= '' ): MetaDefinition[] {

    const fbTitle =     {'property': 'og:title', content:title},
      fbDescription =   {'property': 'og:description', content:description},
      fbSiteName =      {'property': 'og:site_name', content:environment.nameWeb},
      fbImage =         {'property': 'og:image', content:`${environment.urlImages}${image}`},
      fbUrl =           {'property': 'og:url', content:`${environment.urlSites}${url}`},

      // tag to twitter
      twTitle =         {'name': 'twitter:title', content:title},
      twDescription =   {'name': 'twitter:description', content:description},
      twImage =         {'name': 'twitter:image', content:`${environment.urlImages}${image}`},
      twUrl =           {'name': 'twitter:card', content:`${environment.urlSites}${url}`}

  return [fbTitle,fbDescription,fbImage,fbUrl,twTitle,twDescription,twImage,twUrl,fbSiteName]

  }

  // Los tags para Post y paginas son distintos
  // En Post Preparamos los tags segun el contenido del articulo
  getTagsForPost(data: PostResponse){
    of(data).pipe(
        map( (tags: PostResponse) => {
          // actualizamos el title de la pagina con el titulo del post
          this.titleTag.setTitle(tags.title)
          return this.formatTags(tags.title,tags.excerpt,tags.image.url,tags.slug)
        }),
        take(1)
      )
    .subscribe((tag: MetaDefinition[]) => tag.forEach(tag => this.metaTagService.updateTag(tag)))
  }
  // ··········································································································································
  // En las paginas los Datos del "Seo" los agregamos desde el backend
  getTagForPage(page: string): Subscription {

    return this._http.get(`${this.urlSites}:${this.portSites}/${page}`)

    .pipe(
      catchError(handleHttpResponseError),
      pluck <MetaTagsPageResponse, TAGS>('SEO'),
      map<TAGS, MetaDefinition[]>( tags => {
        this.titleTag.setTitle(tags.title)
        return this.formatTags(tags.title, tags.description, tags.image[0].url)
      }),
      take(1)
    )
    .subscribe((tags) => tags.forEach( tag => this.metaTagService.updateTag(tag)))
  }


  deleteMetaTags(): Subscription{
    return of(...this.essentialTags())
    .pipe(
      map(tagsProperty => {
        const tags = []
        Object.getOwnPropertyNames(tagsProperty).forEach(val => {
          tags.push(`${val}='${tagsProperty[val]}'`);
        });
        return tags
       })
    ).subscribe(tag => this.metaTagService.removeTag(tag[0]) )
  }

}
