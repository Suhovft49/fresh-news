import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NewsService } from './shared/services/news.service';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { FreshNewsHeader } from './components/header/header.component';
import { FreshNewsContainer } from './components/news.container/news.container.component';
import { NewsItemComponent } from './components/news-item/news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FreshNewsHeader,
    FreshNewsContainer,
    NewsItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
