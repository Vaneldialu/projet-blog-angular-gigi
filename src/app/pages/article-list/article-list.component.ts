import {Component, inject} from '@angular/core';
import {ArticleComponent} from '../article/article.component';
import {NgClass,NgFor, NgForOf, NgIf} from '@angular/common';
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
<<<<<<< HEAD
  imports: [ArticleComponent, NgFor, RouterLink, NgForOf, NgClass, ArtcileVidComponent, LastArticleComponent],
=======
  imports: [ArticleComponent, NgFor, RouterLink, NgForOf, NgClass,ArtcileVidComponent, NgIf],
>>>>>>> cec8433d58a432a5910ad1e7131fa5f5295b4b39
  templateUrl: './article-list.component.html',
  standalone: true,
  styleUrl: './article-list.component.css',
})
export class ArticleListComponent {
<<<<<<< HEAD
  onRefreshPage() {
    this.getAll();
  }
  articles!: ArticleApi[];
=======
  articles: ArticleApi[] = []; // <- éviter le ! ici
>>>>>>> cec8433d58a432a5910ad1e7131fa5f5295b4b39
  service: ArticleService = inject(ArticleService);
  links?: Links;
  meta?: Meta;
  isConnected: boolean = false;
  isLoading: boolean = true; // <- Ajout

  

  ngOnInit() {
    this.isConnected = !!localStorage.getItem('token');
    this.getAll();
  }

  getAll(link?: string) {
    this.isLoading = true; // <- Démarrer le loader

    this.service.getAll(link).then((reponse) => {
      this.articles = reponse.data;
      this.links = reponse.links;
      this.meta = reponse.meta;
<<<<<<< HEAD
      console.log("reponse:",this.articles);
      
=======
      this.isLoading = false; // <- Arrêter le loader
      console.log("reponse:", reponse);
    }).catch((error) => {
      console.error("Erreur lors du chargement des articles:", error);
      this.isLoading = false; // <- Assurer l'arrêt même en cas d'erreur
>>>>>>> cec8433d58a432a5910ad1e7131fa5f5295b4b39
    });
  }

  next() {
    if (this.links?.next) {
      this.getAll(this.links.next);
    }
  }

  prev() {
    if (this.links?.prev) {
      this.getAll(this.links.prev);
    }
  }

  pagine(url?: string) {
    if (url) {
      this.getAll(url);
    }
  }
}
