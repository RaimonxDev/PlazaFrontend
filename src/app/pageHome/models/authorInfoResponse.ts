export interface AuthorInfoResponse {
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
    picture_author:    PictureAuthor;
    posts:             Post[];
}

export interface authorInfoResponseShort {
    id:                number;
    first_name:        string;
    last_name:         string;
    email:             string;
    about_author:      string;
    picture_author:    {
      url : string
    }
}

export interface PictureAuthor {
    id:                number;
    name:              string;
    alternativeText:   string;
    caption:           string;
    width:             number;
    height:            number;
    formats:           Formats;
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
    EXTPNG = ".png",
    Jpg = ".jpg",
    PNG = ".PNG",
}

export interface Formats {
    small:     Large;
    medium?:   Large;
    thumbnail: Large;
    large?:    Large;
}

export interface Large {
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
    image:           PictureAuthor;
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

export interface Social {
    id:                  number;
    social_network:      string;
    link_social_network: string;
    name_social_network: null;
    name:                string;
    link:                string;
}
