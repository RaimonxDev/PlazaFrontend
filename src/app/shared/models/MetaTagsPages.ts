export interface MetaTagsPageResponse {
    id:           number;
    published_at: Date;
    created_at:   Date;
    updated_at:   Date;
    keywords:     null;
    SEO:          TAGS;
}

export interface TAGS {
    id:          number;
    title:       string;
    name:        null;
    content:     null;
    description: string;
    keywords:    null;
    image:       Image[];
}

export interface Image {
    id:                number;
    name:              string;
    alternativeText:   string;
    caption:           string;
    width:             number;
    height:            number;
    formats:           null;
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

