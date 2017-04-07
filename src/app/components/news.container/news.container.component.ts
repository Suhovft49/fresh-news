import { Component } from '@angular/core';
import { NewsService } from '../../shared/services/news.service';

@Component({
    moduleId: module.id,
    selector: 'fresh-news-container',
    templateUrl: 'news.container.component.html',
    styleUrls: ['news.container.component.css'],
    providers: [NewsService]
})

export class FreshNewsContainer {
    constructor(
        private NewsService: NewsService
    ) {

    }
    ngOnInit():void {
        this.NewsService.getLatestArticles();
    }
}