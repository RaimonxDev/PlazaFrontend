
export interface PostResponse {
    id:              number;
    slug:            string;
    author:          Author;
    published_at:    Date;
    created_at:      Date;
    updated_at:      Date;
    title:           string;
    content:         string;
    excerpt:         string;
    image:           Image;
    categories:      Category[];
}

export interface Author {
    id:             number;
    first_name:     string;
    last_name:      string;
    email:          string;
    about_author:   string;
    published_at:   Date;
    created_at:     Date;
    updated_at:     Date;
    picture_author: PictureAuthor;
}

export interface PictureAuthor {
    id:                number;
    name:              string;
    alternativeText:   string;
    caption:           string;
    width:             number;
    height:            number;
    formats:           PictureAuthorFormats;
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

export interface PictureAuthorFormats {
    small:     Small;
    medium:    Small;
    thumbnail: Small;
}

export interface Small {
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

export interface Category {
    id:            number;
    name_category: string;
    published_at:  Date;
    created_at:    Date;
    updated_at:    Date;
}

export interface Image {
    id:                number;
    name:              string;
    alternativeText:   string;
    caption:           string;
    width:             number;
    height:            number;
    formats:           ImageFormats;
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

export interface ImageFormats {
    small:     Small;
    thumbnail: Small;
}

