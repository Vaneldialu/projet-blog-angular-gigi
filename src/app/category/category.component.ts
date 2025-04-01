import { RouterLink } from '@angular/router';
import { Category } from './../models/category';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  @Input() category! : Category
}
