import { Component, inject } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../models/article';
import { NgFor } from '@angular/common';
import { ArticleService } from '../services/article.service';
import { ArticleApi } from '../models/article-api';

@Component({
  selector: 'app-article-list',
  imports: [ArticleComponent, NgFor],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {
  articles!: ArticleApi[];
  service:ArticleService = inject(ArticleService);     
   
  ngOnInit(){
    this.service.getAllArticles().then((articleApi:ArticleApi[])=>{
      this.articles = articleApi
    })
  }

  
}
