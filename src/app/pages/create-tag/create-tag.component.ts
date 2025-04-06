import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TagService } from '../../services/tag.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-tag',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-tag.component.html',
  styleUrl: './create-tag.component.css'
})
export class CreateTagComponent {

  service: TagService = inject(TagService);
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

        await this.service.storeTag(name, description);

          this.route.navigate(['/tags']);

      } catch (e) {
        this.isOpenGreen = true;
        this.errorMessage = 'Une erreur est survenue lors de l\'enregistrement du tag.';
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
