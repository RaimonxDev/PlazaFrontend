export interface AllCategoryResponse {
    id:            number;
    name_category: string;
    published_at:  Date;
    created_at:    Date;
    updated_at:    Date;
    image:         AllCategoryResponseImage;
    posts:         Post[];
}

export interface shortCategoryResponse{
  id: number;
  name_category: string;
  image: {
    name: string;
    url: string
  }
  posts: Post[]
}

export interface AllCategoryResponseImage {
    id:                number;
    name:              string;
    alternativeText:   string;
    caption:           string;
    width:             number;
    height:            number;
    formats:           PurpleFormats;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    created_at:        Date;
    updated_at:        Date;
}

export enum EXT {
    EXTPNG = ".PNG",
    Jpg = ".jpg",
    PNG = ".png",
}

export interface PurpleFormats {
    small?:    Small;
    thumbnail: Small;
}

export interface Small {
    ext:    EXT;
    url:    string;
    hash:   string;
    mime:   MIME;
    name:   string;
    path:   null;
    size:   number;
    width:  number;
    height: number;
}

export enum MIME {
    ImageJPEG = "image/jpeg",
    ImagePNG = "image/png",
}

export interface Post {
    id:              number;
    titulo:          null;
    article_content: null;
    author:          number;
    published_at:    Date;
    created_at:      Date;
    updated_at:      Date;
    title:           string;
    content:         string;
    excerpt:         string;
    slug:            string;
    meta_facebook:   null;
    meta_twitter:    null;
    image:           PostImage;
    comments:        Comment[];
}

export interface Comment {
    id:            number;
    content:       string;
    blocked:       null;
    blockedThread: null;
    blockReason:   null;
    points:        null;
    authorUser:    null;
    authorType:    null;
    authorId:      string;
    authorName:    string;
    authorEmail:   string;
    authorAvatar:  null;
    threadOf:      null;
    created_at:    Date;
    updated_at:    Date;
}

export interface PostImage {
    id:                number;
    name:              string;
    alternativeText:   string;
    caption:           string;
    width:             number;
    height:            number;
    formats:           FluffyFormats;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    created_at:        Date;
    updated_at:        Date;
}

export interface FluffyFormats {
    large:     Small;
    small:     Small;
    medium:    Small;
    thumbnail: Small;
}
