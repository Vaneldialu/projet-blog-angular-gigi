<<<<<<< HEAD
import { Component, inject } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { NgFor } from '@angular/common';
import { ArticleService } from '../services/article.service';
import { ArticleApi } from '../models/article-api';
import { RouterLink } from '@angular/router';
import { ArtcileVidComponent } from '../artcile-vid/artcile-vid.component';
// import { ArtcileVidComponent, VideoComponent } from "../artcile-vid/artcile-vid.component";
//import { VideoComponent } from "../video/video.component";
=======
import {Component, inject} from '@angular/core';
import {ArticleComponent} from '../article/article.component';
import {NgFor} from '@angular/common';
import {ArticleService} from '../services/article.service';
import {ArticleApi} from '../models/article-api';
import {RouterLink} from '@angular/router';
>>>>>>> 0090802fa29ff8aa93f5e6ea52242d0de5f4d429

@Component({
  selector: 'app-article-list',
  imports: [ArticleComponent, NgFor, RouterLink, ArtcileVidComponent],
  templateUrl: './article-list.component.html',
  standalone: true,
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {
  articles!: ArticleApi[];
  service: ArticleService = inject(ArticleService);


  onRefreshPage() {
    this.getAll()
  }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.service.getAll().then((articleApi: ArticleApi[]) => {
      this.articles = articleApi
    })
  }


}
