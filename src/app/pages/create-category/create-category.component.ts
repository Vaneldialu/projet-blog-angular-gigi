import { Router } from '@angular/router';
import { Category } from '../../models/category';
import { Component, inject } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create-category',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent {
  service: CategoryService = inject(CategoryService);
  route: Router = inject(Router);

  errorMessage?: string;
  successMessage?: string;
  isOpenGreen: boolean = false; 

  applyForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required]),
  });

  async onSubmitForm() {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.applyForm.valid) {
      try {
        // Récupération des valeurs du formulaire
        const name = this.applyForm.get('name')?.value ?? '';
        const description = this.applyForm.get('description')?.value ?? '';

        await this.service.storeCategory(name, description);

        // Réinitialisation du formulaire et affichage du message
        this.applyForm.reset();
       
          this.route.navigate(['/categories']);
      
      } catch (e) {
        this.isOpenGreen = true;
        this.errorMessage = 'Une erreur est survenue lors de l\'enregistrement de la catégorie.';
      }
    } else {
      this.isOpenGreen = true;
      this.errorMessage = 'Veuillez remplir tous les champs obligatoires avant de soumettre le formulaire';
    }
  }

  closeAlert() {
    this.isOpenGreen = false;
  }
 
}
