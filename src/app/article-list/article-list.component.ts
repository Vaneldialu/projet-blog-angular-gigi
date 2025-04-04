import {Component, inject} from '@angular/core';
import {ArticleComponent} from '../article/article.component';
import {NgClass,NgFor, NgForOf} from '@angular/common';
import {ArticleService} from '../services/article.service';
import {ArticleApi} from '../models/article-api';
import {RouterLink} from '@angular/router';
import { FooterComponent } from "../footer/footer/footer.component";
import { Links } from '../models/links';
import { Meta } from './../models/meta';

@Component({
  selector: 'app-article-list',
  imports: [ArticleComponent, NgFor, RouterLink, FooterComponent,NgForOf, NgClass],
  templateUrl: './article-list.component.html',
  standalone: true,
  styleUrl: './article-list.component.css',
})
export class ArticleListComponent {
  articles!: ArticleApi[];
  service: ArticleService = inject(ArticleService);
  links?:Links
  meta?:Meta

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
      this.meta = reponse.meta;
      console.log("reponse:", reponse);
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
  pagine(url?:string) {
    if (url) {
      this.getAll(url)
    }
  }

}
