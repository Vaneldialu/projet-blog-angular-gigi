import { Component, inject } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { NgFor } from '@angular/common';
import { ArticleService } from '../services/article.service';
import { ArticleApi } from '../models/article-api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-list',
  imports: [ArticleComponent, NgFor, RouterLink],
  templateUrl: './article-list.component.html',
  standalone: true,
  styleUrl: './article-list.component.css',
})
export class ArticleListComponent {
  articles!: ArticleApi[];
  service: ArticleService = inject(ArticleService);
  links?: {
    first: string;
    last: string;
    next?: string;
    prev?: string;
  };

  onRefreshPage() {
    this.getAll();
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(link?: string) {
    this.service.getAll(link).then((reponse) => {
      this.articles = reponse.data;
      this.links = reponse.links;
    });
  }
  next() {
    if (this.links?.next) {
      this.getAll(this.links.next)
    }
  }

  prev() {
    if (this.links?.prev){
      this.getAll(this.links.prev)
    }
  }
}
