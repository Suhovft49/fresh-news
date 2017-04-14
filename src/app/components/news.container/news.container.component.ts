import { Component } from '@angular/core';
import { NewsService } from '../../shared/services/news.service';
import { article, sourceArticle } from '../../shared/interfaces/article';

@Component({
    moduleId: module.id,
    selector: 'fresh-news-container',
    templateUrl: 'news.container.component.html',
    styleUrls: ['news.container.component.css'],
    providers: [NewsService]
})

export class FreshNewsContainer {
    channelArticles: article[]
    sources: sourceArticle[];
    sourcesSubscribe:any;
    item:any;
    constructor(
        private NewsService: NewsService
    ) {
        this.sourcesSubscribe = this.NewsService.sourcesChanged.subscribe(data => {
            this.getAllArticlesBySourcesArr(data)
        })
    }

    getSources() {
        this.NewsService.getSources()
            .subscribe(sources => {
                this.NewsService.changeSources(sources)
            })
    }

    getArticlesBySource(source) {
        this.NewsService.getArticlesBySource()
            .subscribe(articles => {
                this.channelArticles = articles;
            });   
    }

    // generateArticlesByData(item) {
    //     item.articles.forEach(element => {
    //         element.name = item.name;
    //         element.sourceUrl = item.url;
    //         element.sourceLogosUrl = item.urlsToLogos;
    //     });
    //     debugger;
    //     this.articles.push(item.articles);
    // }

    getAllArticlesBySourcesArr(sourcesArr) {
        this.NewsService.getAllArticlesBySourcesArr(sourcesArr)
        .subscribe(data => {
            let itteratedData = Array.from(data);
            let articleArr = [];
            for ( let item of itteratedData as any) {
                item.articles.forEach(element => {
                    element.name = item.name;
                    element.sourceUrl = item.url;
                    element.sourceLogosUrl = item.urlsToLogos;
                    articleArr.push(element)
                });
            }
            this.channelArticles = articleArr;
        })
    }

    ngOnInit() {
        this.getSources(); 
    }
}