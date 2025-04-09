import {Component, inject} from '@angular/core';
import {ArticleComponent} from '../article/article.component';
import {NgClass,NgFor, NgForOf} from '@angular/common';
import {ArticleService} from '../../services/article.service';
import {ArticleApi} from '../../models/article-api';
import {RouterLink} from '@angular/router';
import { Links } from '../../models/links';
import { Meta } from '../../models/meta';
import { VideoComponent } from '../article-video/video.component';
import { ArtcileVidComponent } from "../artcile-vid/artcile-vid.component";
import { LastArticleComponent } from "../last-article/last-article.component";

@Component({
  selector: 'app-article-list',
  imports: [ArticleComponent, NgFor, RouterLink, NgForOf, NgClass, ArtcileVidComponent, LastArticleComponent],
  templateUrl: './article-list.component.html',
  standalone: true,
  styleUrl: './article-list.component.css',
})
export class ArticleListComponent {
  onRefreshPage() {
    this.getAll();
  }
  articles!: ArticleApi[];
  service: ArticleService = inject(ArticleService);
  links?:Links
  meta?:Meta

  

  ngOnInit() {
    this.getAll();
  }

  getAll(link?: string) {
    this.service.getAll(link).then((reponse) => {
      this.articles = reponse.data;
      this.links = reponse.links;
      this.meta = reponse.meta;
      console.log("reponse:",this.articles);
      
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