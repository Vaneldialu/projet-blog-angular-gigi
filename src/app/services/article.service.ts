import { BASE_URL } from './../app.tokens';
import { inject, Injectable } from '@angular/core';
import { ArticleApi } from '../models/article-api';
import { log } from 'node:console';
import { Comment } from '../models/comment';
import { promises } from 'node:dns';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: ArticleApi[] = [];
  comments: Comment[] = [];

  url = inject(BASE_URL);

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
  }) {
    return fetch(`${this.url}/api/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify(data),
    });
  }

  async likeArticle(data: { articleId: number }) {
    console.log(data);
    return fetch(`${this.url}/api/articles/${data.articleId}/likes`, {
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
      content: string;
      categories: number[];
      tags: number[];
    }
  ) {
    return fetch(`${this.url}/api/articles/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify(data),
    });
  }

  async getOne(id: number): Promise<ArticleApi | undefined> {
    return fetch(`${this.url}/api/articles/${id}`)
      .then((response) => response.json())
      .then((data) => data.data);
  }

  async getComments(id: number): Promise<Comment[]> {
    const response = await fetch(`${this.url}/api/comments/${id}`);
    const json = await response.json();

    // Typage explicite ici
    return json.data as Comment[];
  }

  async storeComment(data: { content: string; article_id: number }) {
    const response = await fetch(`${this.url}/api/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la création du commentaire');
    }

    return await response.json();
  }
  async getFiveArticle(): Promise<ArticleApi[]>{
    const response = await fetch(`${this.url}/api/getlatestfivearticles`)
    const json= await response.json();
    console.log(json.data);
    return json.data;
  }

}
