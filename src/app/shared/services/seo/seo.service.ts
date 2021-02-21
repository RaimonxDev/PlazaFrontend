import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

import { of, Subscription } from 'rxjs';
import { catchError, map, pluck, take, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
// utils
import { handleHttpResponseError } from '@utils/http-errors';
// Models
import { PostResponse } from 'src/app/page-blog/models/PostResponse';
import { MetaTagsPageResponse, TAGS } from "../../models/MetaTagsPages";
import { tag } from '@shared/models/TagsSeo';



@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private urlWeb:string = environment.urlWeb
  private APIurl:string = environment.APIurl

  private tagDefault = {
    title: 'Plaza Frontend',
    description: "Hablemos de Front-End",
    image: `https://plazafrontend.io/uploads/log_plaza_frontend_1b901f7929.svg`,
    url:`https:plazafrontend.io`

  }
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

  formatTags( {title, description, image , url}: tag ): MetaDefinition[] {

    const fbTitle =     {'property': 'og:title', content:title },
      fbDescription =   {'property': 'og:description', content:description},
      fbSiteName =      {'property': 'og:site_name', content:environment.nameWeb },
      fbImage =         {'property': 'og:image', content:image },
      fbUrl =           {'property': 'og:url', content: url },

      // tag to twitter
      twTitle =         {'name': 'twitter:title', content: title},
      twDescription =   {'name': 'twitter:description', content: description},
      twImage =         {'name': 'twitter:image', content: image},
      twUrl =           {'name': 'twitter:card', content:url }

  return [fbTitle,fbDescription,fbImage,fbUrl,twTitle,twDescription,twImage,twUrl,fbSiteName]

  }

  // Los tags para Post y paginas son distintos
  // En Post Preparamos los tags segun el contenido del articulo
  getTagsForPost(data: PostResponse){
    of(data).pipe(
        map( (postTags: PostResponse) => {
          // actualizamos el title de la pagina con el titulo del post
          this.titleTag.setTitle(postTags.title)
          let tags: tag = {
            title: postTags.title,
            description: postTags.excerpt,
            image: `${this.APIurl}${postTags.image.url}`,
            url:`${this.urlWeb}/${postTags.slug}`
          }
          return this.formatTags(tags)
        }),
        take(1)
      )
    .subscribe((tag: MetaDefinition[]) => tag.forEach(tag => this.metaTagService.updateTag(tag)))
  }
  // ··········································································································································
  // En las paginas los Datos del "Seo" los agregamos desde el backend
  getTagForPage(currentPage: string): any {
    // PENDIENTE CORREGIR: CUANDO NO VIENE LA DATA COMPLETA SE ROMPE LA FUNCION, VERIFICAR SI NO VIENE LA DATA COLOQUE DATOS POR DEFAULT
    return this._http.get(`${this.APIurl}${currentPage}`)
    .pipe(
      pluck <MetaTagsPageResponse, TAGS>('SEO'),
      map<TAGS, MetaDefinition[]>( tags => {
        // se actualiza el titulo
        if(tags){
          this.titleTag.setTitle(tags.title)
          let tag: tag = {
             title: tags.title,
             description: tags.description,
             image: `${this.APIurl}${tags.image[0].url}`,
             url:`${this.urlWeb}${currentPage}`
           }
           return this.formatTags(tag)
        }
        if(!tags){
          return this.formatTags(this.tagDefault)
        }
      }),
      take(1),
      catchError(handleHttpResponseError),
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
