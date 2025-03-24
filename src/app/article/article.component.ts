import { Component, Input } from '@angular/core';
import { Article } from '../models/article';
import { RouterLink } from '@angular/router';
import { ArticleApi } from '../models/article-api';

@Component({
  selector: 'app-article',
  imports: [RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
 @Input() article! : ArticleApi;

}
