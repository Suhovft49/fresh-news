import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Subject, Observable } from 'rxjs';
import { NewsApiSettings } from './newApiSettings';

@Injectable()
export class NewsService {
    newsApiSettings = NewsApiSettings;
    constructor(
        private http: Http,
    ) 
    {}

    getLatestArticles() {
        console.log(this.newsApiSettings);
        const { API_KEY, ARTICLES_END_POINT, SOURCES_END_POINT } = this.newsApiSettings;
        const url = ARTICLES_END_POINT + `?apiKey=${API_KEY}`;
        debugger;
        this.http.get(url)
                .map(response => {
                    debugger;
                    return response.json().data
                })
    }


}