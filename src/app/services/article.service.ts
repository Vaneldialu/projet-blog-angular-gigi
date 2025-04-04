import { BASE_URL } from './../app.tokens';
import { inject, Injectable } from '@angular/core';
import { ArticleApi } from '../models/article-api';
import { log } from 'node:console';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: ArticleApi[] = [];
  //url = inject(BASE_URL);
  url = "http://127.0.0.1:8000"

  //avec resource en collection
  async getAll(link?: string) {
    let baseUrl = `${this.url}/api/articles`;
    if (link) {
      baseUrl = link;
    }
    return fetch(baseUrl)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return new Error('erreujrrrrrrrr');
      })
      .then((data) => {
        return data;
       // return data.data;
       return data.data
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async createArticle(data: {
    title: string;
    content: string;
    categories: number[];
    tags: number[];
    photo: string;
    auteur: string;
  }) {
    return fetch(`${this.url}/api/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  async likeArticle(data: { articleId: number }) {
    console.log(data);
    return fetch(`${this.url}/api/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify(data),
    });
  }

  async editform(
    id: number,
    data: {
      title: string;
      photo: string;
      auteur: string;
      content: string;
      categories: number[];
      tags: number[];
    }
  ) {
    return fetch(`${this.url}/api/articles/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  async getOne(id: number): Promise<ArticleApi | undefined> {
    return fetch(`${this.url}/api/articles/${id}`)
      .then((response) => response.json())
      .then((data) => data.data);
  }


  async getTroisArticle(): Promise<ArticleApi[]> {
    return fetch(`${this.url}/api/getLatestTreeArticle`)
      .then(response => {
        if (!response.ok) throw new Error('Erreur réseau');
        return response.json();
      })
      .then(data => data.data) // Même traitement que getAll
      .catch(err => {
        console.error('Erreur:', err);
        return [];
      });
  }
  }