import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { CategoryService } from '../services/category.service';
import { TagService } from '../services/tag.service';
import { Category } from '../models/category';
import { Tag } from '../models/tag';
import { NgForOf, NgIf } from '@angular/common';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-edit-article',
  imports: [ReactiveFormsModule,
    NgForOf,
    NgIf],
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.css'
})
export class EditArticleComponent {
  articleId?:Number;
  private articleService = inject(ArticleService)
  private categoryService = inject(CategoryService)
  private tagService = inject(TagService)
  router: Router = inject(Router)
  route:ActivatedRoute=inject(ActivatedRoute)


  errorMessage?: string
  successMessage?: string

  categories: Category[] = []
  tags: Tag[] = []

  formData = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.min(3)]),
    photo: new FormControl('', [Validators.required]),
    auteur: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required, Validators.minLength(100)]),
    categories: new FormControl([],[Validators.required]),
    tags : new FormControl([],[Validators.required])
  })
  ngOnInit():void{
    const articleId=Number(this.route.snapshot.paramMap.get('articleId'));
    this.articleService.getOne(articleId)


      }

      async onSubmitForm() {

        this.successMessage = ''
        this.errorMessage = ''


    }

  }
