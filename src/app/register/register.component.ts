import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  route: Router = inject(Router);
  service: UserService = inject(UserService);
  isConnected: boolean = false;
  isOpenError: boolean = false;

  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl(''),
  });

  register() {
    // Récupérer les valeurs du formulaire
    const { name, email, password, password_confirmation } =
      this.registerForm.value;

    // Vérifier si les mots de passe correspondent
    if (password !== password_confirmation) {
      this.isOpenError = true;
      return;
    }

    // Appeler le service pour enregistrer l'utilisateur
    this.service
      .registerUser(
        email ?? '',
        name ?? '',
        password ?? '',
        password_confirmation ?? ''
      )
      .then((user) => {
        // Si l'enregistrement réussit, rediriger l'utilisateur ou afficher un message de succès
        this.isConnected = true;
        this.route.navigate(['']); // Exemple de redirection vers la page de login
      })
      .catch((error) => {
        // message d'erreur en cas d'erreur
        this.isOpenError = true;
        console.error("Erreur d'enregistrement:", error);
      });
  }

  close() {
    this.isOpenError = false;
  }
}
