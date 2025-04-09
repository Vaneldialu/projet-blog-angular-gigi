import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ArticleApi } from '../../models/article-api';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-last-article',
  imports: [NgFor, RouterLink, RouterModule],
  templateUrl: './last-article.component.html',
  styleUrl: './last-article.component.css'
})
export class LastArticleComponent implements OnInit {
  articles: ArticleApi[] = [];
  

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.loadThreeArticles();
  }
  onRefreshPage() {
    this.loadThreeArticles();
  }

  async loadThreeArticles(): Promise<void> {
    try {
      this.articles = await this.articleService.getTroisArticle();
    } catch (error) {
      console.error('Error loading articles:', error);
    }
  }

  currentYear = new Date().getFullYear();



  // loadThreeArticles() {
  //   this.articleService.getTroisArticles().then((reponse) => {
  //     this.articles = reponse.data;
  //     console.log("reponse:", reponse);
  //   });
  // }
}
