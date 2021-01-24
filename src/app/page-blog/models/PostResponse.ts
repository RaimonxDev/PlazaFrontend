// To parse this data:
//
//   import { Convert, ArticlesResponse } from "./file";
//
//   const articlesResponse = Convert.toArticlesResponse(json);

export interface PostResponse {
    id:              number;
    author:          Author;
    published_at:    Date;
    created_at:      Date;
    updated_at:      Date;
    title:           string;
    content:         string;
    excerpt:         string;
    slug:            string;
    Seo:             SEO[];
    image:           Image;
    categories:      Category[];
}

export interface SEO {
    id:      number;
    name:    string;
    content: string;
}


export interface Author {
    id:                number;
    first_name:        string;
    last_name:         string;
    email:             string;
    about_author:      string;
    published_at:      Date;
    created_at:        Date;
    updated_at:        Date;
    developer_profile: string;
    social:            Social[];
    picture_author:    Image;
}

export interface Image {
    id:                number;
    name:              string;
    alternativeText:   string;
    caption:           string;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    created_at:        Date;
    updated_at:        Date;
}

export interface Formats {
    small:     Large;
    medium:    Large;
    thumbnail: Large;
    large?:    Large;
}

export interface Large {
    ext:    string;
    url:    string;
    hash:   string;
    mime:   string;
    name:   string;
    path:   null;
    size:   number;
    width:  number;
    height: number;
}

export interface Social {
    id:                  number;
    social_network:      string;
    link_social_network: string;
    name_social_network: null;
    name:                string;
    link:                string;
}

export interface Category {
    id:            number;
    name_category: string;
    published_at:  Date;
    created_at:    Date;
    updated_at:    Date;
}

