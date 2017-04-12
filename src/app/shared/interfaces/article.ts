export interface article {
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string
}

export interface sourceArticle {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    sortBysAvailable: string[];
    url: string;
    urlsToLogos: {
        large: string;
        medium: string;
        small: string;
    };
}