import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Subject, Observable } from 'rxjs';
import { NewsApiSettings } from './newApiSettings';
import { article, sourceArticle } from '../interfaces/article';

@Injectable()
export class NewsService {
    newsApiSettings = NewsApiSettings;
    basicSource:string = "google-news";
    public sourcesArticles = new Subject<any>();
    public sourcesChanged: Observable<sourceArticle>;
    constructor(
        private http: Http,
    ) 
    {
        this.sourcesChanged = this.sourcesArticles.asObservable();
    }

    changeSources(data) {
        this.sourcesArticles.next(data);
    }

    getSources():Observable< sourceArticle[] > {
        const { API_KEY, ARTICLES_END_POINT, SOURCES_END_POINT } = this.newsApiSettings;
        const url = SOURCES_END_POINT + `?lang=en`;
        return this.http.get(url)
            .map(response => {
                return response.json().sources as sourceArticle[];
            })
            .catch(this.errorHandler)
    }

    getAllArticlesBySourcesArr(sourcesArr) {
        const { API_KEY, ARTICLES_END_POINT, SOURCES_END_POINT } = this.newsApiSettings;
        let requestsArr:any = [];
        sourcesArr.forEach(element => {
            let requestItem = this.http
                .get(ARTICLES_END_POINT + `?source=${element.id}&apiKey=${API_KEY}`)
                .map(response => Object.assign(element, response.json()))
                .catch(this.errorHandler);

            requestsArr.push(requestItem);
        });
        return Observable.forkJoin(requestsArr)
            .map(data => data)
    }

    getArticlesBySource(source = this.basicSource):Observable< article[] > {
        const { API_KEY, ARTICLES_END_POINT, SOURCES_END_POINT } = this.newsApiSettings;
        const url = ARTICLES_END_POINT + `?source=${source}&apiKey=${API_KEY}`;
        return this.http.get(url)
            .map(response => {
                return response.json().articles as article[];
            })
            .catch(this.errorHandler)
    }

    errorHandler(error):any {
        debugger;
        Observable.throw(error.json().error || 'Server error');
    }
}