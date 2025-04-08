import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { ArticleApi } from '../../models/article-api';
import { ArticleService } from '../../services/article.service';
import { log } from 'console';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @Input() article!: ArticleApi;
  @Output() refreshPage = new EventEmitter();

  private articleService = inject(ArticleService);

  async onLike() {
    console.log(this.article.id);
    
    try {
      await this.articleService.likeArticle({ articleId: this.article.id });
      this.refreshPage.emit();
    } catch (e) {
      console.error('Erreur lors du like:', e);
    }
  }
}
