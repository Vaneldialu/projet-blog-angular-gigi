import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NewsletterService } from '../services/newsletter.service';
import { Newsletter } from '../models/newsletter';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent {
  service: NewsletterService = inject(NewsletterService);
  newsletter!: Newsletter;
  
  isOpenGreen: boolean = false; // Notification succès
  isOpenRed: boolean = false;   // Notification erreur

  // Formulaire avec validation
  applyForm = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.email, // Vérification d'email valide
    ])
  });

  // Fonction pour soumettre le formulaire
  saveNewsletter() {
    if (this.applyForm.invalid) {
      this.isOpenRed = true;  // Affiche une alerte rouge si l'email est invalide
      return;
    }

    this.service.storeNewsletter(this.applyForm.value.email ?? "")
      .then((newsletterApi: Newsletter) => {
        this.newsletter = newsletterApi;
        this.service.newsletters.unshift(this.newsletter);

        // Notification succès
        this.isOpenGreen = true;
        this.isOpenRed = false;
        
        // Vider le formulaire
        this.applyForm.reset();
      })
      .catch(() => {
        this.isOpenGreen = false;
        this.isOpenRed = true; // Afficher l'erreur en cas d'échec
      });
  }

  // Fermer les notifications
  closeGreen() {
    this.isOpenGreen = false;
  }

  closeRed() {
    this.isOpenRed = false;
  }
}
