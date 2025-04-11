import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ArticleApi } from '../../models/article-api';
import { ArticleService } from '../../services/article.service';
import { log } from 'console';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  @Input() article!: ArticleApi;
  @Output() refreshPage = new EventEmitter();
  isConnected: boolean = false;
  userId: number = Number(localStorage.getItem('userId'));
  isAuthor: boolean = false;

  // Injections
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  private articleService = inject(ArticleService);

  ngOnInit() {
    this.isConnected = !!localStorage.getItem('token');
    this.userId = Number(localStorage.getItem('userId'));

  if (this.isConnected && this.article.auteur.id) {
    this.isAuthor = this.userId === this.article.auteur.id;
  }
  }



  async onLike() {
    console.log(this.article);
    
    try {
      if (this.isConnected) {
        await this.articleService.likeArticle({ articleId: this.article.id });
        this.refreshPage.emit();
      } else {
        alert('Vous devez être connecté pour aimer un article.');

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 0);
      }
    } catch (e) {
      console.error('Erreur lors du like:', e);
    }
  }
}