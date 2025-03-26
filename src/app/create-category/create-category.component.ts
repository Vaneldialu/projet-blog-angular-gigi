import { Category } from './../models/category';
import { Component, inject } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create-category',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent {
  service:CategoryService = inject(CategoryService)
  category !: Category
  isOpenGreen:boolean = false
  isOpenError:boolean = false

  //Creation de l'insertion
  applyForm = new FormGroup({
    name : new FormControl(""),
    description : new FormControl("")
  })

  //sauver de l'insertion avec apis
  saveCategory(){
    this.service.storeCategory(
      this.applyForm.value.name??"",
      this.applyForm.value.description??""
    ) 
    .then((categoryApi:Category) => {
      this.category = categoryApi

    //Rajouter dans le tableau
      this.service.categories.unshift(this.category)
    })

    //Notification s'affiche apres insertion
    this.isOpenGreen = true


    //vider le formulaire
    this.applyForm = new FormGroup({
      name : new FormControl(""),
      description : new FormControl("")
    })
  }
  //Function pour fermer la notification
  close(){
    this.isOpenGreen = false
  }

  closeError(){
    this.isOpenError = false
  }

}
