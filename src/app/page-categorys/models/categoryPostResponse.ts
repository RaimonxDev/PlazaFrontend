export interface CategoryPostResponse {
    id:            number;
    name_category: string;
    published_at:  Date;
    created_at:    Date;
    updated_at:    Date;
    image:         CategoryPostResponseImage;
    posts:         Post[];
}

export interface CategoryPostResponseImage {
    id:                number;
    name:              string;
    alternativeText:   string;
    caption:           string;
    width:             number;
    height:            number;
    formats:           PurpleFormats;
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

export interface PurpleFormats {
    thumbnail: Thumbnail;
}

export interface Thumbnail {
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

export interface FluffyFormats {
    large:     Thumbnail;
    small:     Thumbnail;
    medium:    Thumbnail;
    thumbnail: Thumbnail;
}
