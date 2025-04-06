import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArticleComponent } from '../article/article.component';
import { ArticleApi } from '../../models/article-api';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-article-by-category',
  imports: [NgFor,ArticleComponent, ArticleComponent],
  templateUrl: './article-by-category.component.html',
  styleUrl: './article-by-category.component.css'
})
export class ArticleByCategoryComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  articles!: ArticleApi[] | undefined;
  service: CategoryService = inject(CategoryService);
  articleId = -1;

  async ngOnInit(){
    this.articleId = Number(this.route.snapshot.paramMap.get('id'));
    // const categories = await this.servi
    // ce.getArticleByCategory(this.articleId);
    // this.articles = categories.article;
    // this.article = await this.service.getOne(this.articleId);
    this.articles = await this.service.getArticleByCategory(this.articleId);
    console.log(this.articles);
  }

}
