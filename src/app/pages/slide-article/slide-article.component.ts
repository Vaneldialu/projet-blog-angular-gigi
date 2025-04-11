import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ArticleApi } from '../../models/article-api';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-slide-article',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, RouterLink],
  templateUrl: './slide-article.component.html',
  styleUrl: './slide-article.component.css'
})
export class SlideArticleComponent implements OnInit, OnDestroy {
  service: ArticleService = inject(ArticleService);
  route: ActivatedRoute = inject(ActivatedRoute);

  articles: ArticleApi[] = [];
  currentSlideIndex = 0;
  autoplayInterval: any;

  ngOnInit(): void {
    this.service.getFiveArticle().then((articleApi: ArticleApi[]) => {
      this.service.articles = articleApi;
      this.articles = articleApi;
      this.startAutoplay();
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.autoplayInterval);
  }

  startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.next();
    }, 3000); // 5 secondes
  }

  previous(): void {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.articles.length) % this.articles.length;
  }

  next(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.articles.length;
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }
}
