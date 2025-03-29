import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ArticleService} from '../services/article.service';
import {CategoryService} from '../services/category.service';
import {Category} from '../models/category';
import {formatDate, NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';
import { Tag } from '../models/tag';
import { TagService } from '../services/tag.service';

@Component({
  selector: 'app-create-article',
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './create-article.component.html',
  standalone: true,
  styleUrl: './create-article.component.css'
})
export class CreateArticleComponent {

  private articleService = inject(ArticleService)
  private categoryService = inject(CategoryService)
  private tagService = inject(TagService)
  route: Router = inject(Router);

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

  async ngOnInit() {
    await this.getCategories()
    await this.getTags()
  }

  async getCategories() {
    this.categories = await this.categoryService.all()
  }

  async getTags(){
    this.tags = await this.tagService.allTags()
  }

  async onSubmitForm() {

    this.successMessage = ''
    this.errorMessage = ''

    if(this.formData.valid){
      try {
        await this.articleService.createArticle({
          title: this.formData.value.title ?? '',
          photo: this.formData.value.photo ?? '',
          auteur: this.formData.value.auteur ?? '',
          content: this.formData.value.content ?? '',
          categories: this.formData.value.categories ?? [],
          tags: this.formData.value.tags ?? []
        })
        this.formData.reset()
        await this.route.navigate(['/articles'])
      } catch (e) {
        this.errorMessage = "Veuillez remplir tous les champs obligatoires avant de soumettre le formulaire"
      }
    }else{
      this.errorMessage = "Veuillez remplir tous les champs obligatoires avant de soumettre le formulaire"
    }

  }

}
