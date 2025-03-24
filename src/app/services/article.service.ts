import { Injectable } from '@angular/core';
import { ArticleApi } from '../models/article-api';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
 
  articles: ArticleApi[] = [];

  //avec resource en collection 
  async getAllArticles(): Promise<ArticleApi[]> {
    return fetch('http://127.0.0.1:8000/api/articles')
      .then(response => response.json())
      .then(data => {
        return data.data; 
      });
  }

  //Sans resource en collection 
  // getAllArticles():Promise<ArticleApi[]>{
  //   let data = fetch('http://127.0.0.1:8000/api/articles').then(response => response.json())
  //   return data
  // }

  getOneArticle(id: number): ArticleApi | undefined {
    return this.articles.find(article => article.id === id);
  }
}
