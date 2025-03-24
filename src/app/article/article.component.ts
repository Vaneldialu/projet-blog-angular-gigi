import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleApi } from '../models/article-api';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [RouterLink, NgFor],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
 @Input() article! : ArticleApi;

}
