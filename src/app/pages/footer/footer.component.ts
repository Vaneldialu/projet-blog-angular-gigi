import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleApi } from '../../models/article-api';
import { ArticleService } from '../../services/article.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  articles: ArticleApi[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.loadThreeArticles();
  }

  async loadThreeArticles(): Promise<void> {
    try {
      this.articles = await this.articleService.getTroisArticle();
    } catch (error) {
      console.error('Error loading articles:', error);
    }
  }
}
