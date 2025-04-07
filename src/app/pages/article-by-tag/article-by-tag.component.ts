import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { ActivatedRoute } from '@angular/router';
import { ArticleApi } from '../../models/article-api';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-article-by-tag',
  imports: [NgFor,ArticleComponent, ArticleComponent],
  templateUrl: './article-by-tag.component.html',
  styleUrl: './article-by-tag.component.css'
})
export class ArticleByTagComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  articles!: ArticleApi[] | undefined;
  service: TagService = inject(TagService);
  articleId = -1;

  async ngOnInit(){
    this.articleId = Number(this.route.snapshot.paramMap.get('id'));
    // const categories = await this.servi
    // ce.getArticleByCategory(this.articleId);
    // this.articles = categories.article;
    // this.article = await this.service.getOne(this.articleId);
    this.articles = await this.service.getArticleByTag(this.articleId);
    console.log(this.articles);
  }
}
