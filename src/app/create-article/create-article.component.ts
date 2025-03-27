import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ArticleService} from '../services/article.service';
import {CategoryService} from '../services/category.service';
import {Category} from '../models/category';
import {formatDate, NgForOf, NgIf} from '@angular/common';

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
  errorMessage?: string
  successMessage?: string

  categories: Category[] = []

  formData = new FormGroup({
    title: new FormControl(''),
    photo: new FormControl(''),
    auteur: new FormControl(''),
    content: new FormControl(''),
    categories: new FormControl([])
  })

  async ngOnInit() {
    await this.getCategories()
  }

  async getCategories() {
    this.categories = await this.categoryService.all()
  }

  async onSubmitForm() {

    this.successMessage = ''
    this.errorMessage = ''

    try {
      await this.articleService.createArticle({
        title: this.formData.value.title ?? '',
        photo: this.formData.value.photo ?? '',
        auteur: this.formData.value.auteur ?? '',
        content: this.formData.value.content ?? '',
        categories: this.formData.value.categories ?? []
      })
      this.successMessage = "esaliiiiiiiiiiiiii"
      this.formData.reset()
    } catch (e) {
      this.errorMessage = "Nini ngo kho remplir  formulaire bien"
    }

  }

}
