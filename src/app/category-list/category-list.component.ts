import { Component, inject } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { NgFor } from '@angular/common';
import { CategoryComponent } from "../category/category.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-list',
  imports: [NgFor, CategoryComponent, RouterLink],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  service: CategoryService = inject(CategoryService)
  categories!:Category[]

  ngOnInit(): void {
    this.service.all().then((categoriesApi:Category[]) => {
      this.service.categories = categoriesApi
      this.categories = categoriesApi
    })
  }
}
