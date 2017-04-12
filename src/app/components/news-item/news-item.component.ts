import { Component, OnInit, Input } from '@angular/core';
import { article } from '../../shared/interfaces/article';

@Component({
  selector: 'fresh-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() article: article;
  constructor() { }

  ngOnInit() {
  }

}
