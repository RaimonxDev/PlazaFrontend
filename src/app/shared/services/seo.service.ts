import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor() { }

  essentialTags(){
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

  addTags(){}

  updateTags(){

  }

  deleteMetaTags():Observable<any>{
    return of(...this.essentialTags())
    .pipe(
      map(tagsProperty => {
        const tags = []
        Object.getOwnPropertyNames(tagsProperty).forEach(val => {
          tags.push(`${val}='${tagsProperty[val]}'`);
        });
        return tags
       })
    )
  }

}
