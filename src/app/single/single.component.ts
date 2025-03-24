import { Component, inject } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';
import { ActivatedRoute } from '@angular/router';
import { ArticleApi } from '../models/article-api';

@Component({
  selector: 'app-single',
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  route:ActivatedRoute = inject(ActivatedRoute)
  articleId = -1
  service:ArticleService = inject(ArticleService)
  article: ArticleApi | undefined

  ngOnInit(){
    this.articleId = Number(this.route.snapshot.paramMap.get('id'));
    this.article = this.service.getOneArticle(this.articleId);
  }
}
