import {inject, Injectable} from '@angular/core';
import {ArticleApi} from '../models/article-api';
import {response} from 'express';
import {throws} from 'node:assert';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: ArticleApi[] = [];

  //avec resource en collection
  async getAll(): Promise<ArticleApi[]> {
    return fetch('http://127.0.0.1:8000/api/articles')
      .then(response => {
        if (response.status === 200) {
          return response.json()
        }
        return new Error('erreujrrrrrrrr')
      })
      .then(data => {
        return data.data;
      }).catch(err => {
        console.log(err)
      });
  }

  async createArticle(data: {
    title: string,
    content: string,
    categories: number[],
    tags: number[],
    photo: string,
    auteur: string,
  }) {

    return fetch('http://127.0.0.1:8000/api/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })


  }

  async likeArticle(data: {
    articleId: number
  }) {

    console.log(data)
    return fetch('http://127.0.0.1:8000/api/likes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

  }

  //Sans resource en collection
  // getAllArticles():Promise<ArticleApi[]>{
  //   let data = fetch('http://127.0.0.1:8000/api/articles').then(response => response.json())
  //   return data
  // }

//   getOne(id: number): ArticleApi | undefined {
//     return this.articles.find(article => article.id === id)!;
//   }

  async getOne(id: number): Promise<ArticleApi | undefined> {
    return fetch(`http://127.0.0.1:8000/api/articles/${id}`)
      .then(response => response.json())
      .then(data => data.data);
  }

 async editform(id: number,data:{
    title: string
    photo: string
    auteur: string
    content: string
    categories: number[],
    tags: number[]
  }){


    return fetch(`http://127.0.0.1:8000/api/articles/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

}
