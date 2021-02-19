import { environment } from '../../../environments/environment';

export const tagsProperty = (title: string ,
                            description: string ,
                            image : string = '/uploads/Plaza_Frontend_Logo_65906ca292.svg',
                            url   :string = '' ) => {

  // tag to facebook
  const fbTitle =   {'property': 'og:title', content:title},
  fbDescription =   {'property': 'og:description', content:description},
  fbSiteName =      {'property': 'og:site_name', content:environment.nameWeb},
  fbImage =         {'property': 'og:image', content:`${environment.urlWebsite}${image}`},
  fbUrl =           {'property': 'og:url', content:`${environment.urlWebsite}${url}`},

  // tag to twitter
  twTitle =         {'name': 'twitter:title', content:title},
  twDescription =   {'name': 'twitter:description', content:description},
  twImage =         {'name': 'twitter:image', content:`${environment.urlWebsite}${image}`},
  twUrl =           {'name': 'twitter:card', content:`${environment.urlWebsite}${url}`}

  return [fbTitle,fbDescription,fbImage,fbUrl,twTitle,twDescription,twImage,twUrl,fbSiteName]

}
