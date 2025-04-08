import { Component, inject } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { NgFor } from '@angular/common';
import { ArticleApi } from '../../models/article-api';
import { Comment } from '../../models/comment';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-single',
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css',
})
export class SingleComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  article!: ArticleApi|undefined ;
  comments!: Comment[];
  service: ArticleService = inject(ArticleService);
  articleId = -1;
  isConnected : boolean = false
  router : Router = inject(Router)

  async ngOnInit() {
    this.isConnected = !!localStorage.getItem('token');

    this.articleId = Number(this.route.snapshot.paramMap.get('id'));
    
    // Utilisation de await pour récupérer l'article avant l'affichage
    this.article = await this.service.getOne(this.articleId);
    this.comments = await this.service.getComments(this.articleId);
    console.log(this.comments)
  }

  formData = new FormGroup({
    content: new FormControl('')
  });

  async onSubmitForm() {
    if (this.isConnected) {
      if(this.formData.valid){
        try {
          await this.service.storeComment({
            content: this.formData.value.content ?? '',
            article_id: this.articleId
          }).then(() => {
            alert('Kitokos alors');
            this.formData.reset();
            this.ngOnInit(); //en gros recharger la page pour afficher le nouveau commentaire le reload fait des betises
          })
        } catch (e) {
          alert('Remplir le champs avant de soumettre le formulaire')
        }
      }

    }
    else{
      alert('Vous devez vous connecter pour ajouter un commentaire')
      this.router.navigate(['']);
    }
    

  }
}