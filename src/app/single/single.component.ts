import { Component, inject } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';
import { ArticleApi } from '../models/article-api';

@Component({
  selector: 'app-single',
  imports: [NgFor],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css',
})
export class SingleComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  article!: ArticleApi|undefined ;
  service: ArticleService = inject(ArticleService);
  articleId = -1;

  async ngOnInit() {
    this.articleId = Number(this.route.snapshot.paramMap.get('id'));
    
    // Utilisation de await pour récupérer l'article avant l'affichage
    this.article = await this.service.getOne(this.articleId);
  }
}