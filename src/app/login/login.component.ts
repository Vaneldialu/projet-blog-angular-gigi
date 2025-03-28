import { User } from './../models/user';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  route: Router = inject(Router);
  service: UserService = inject(UserService);
  isConnected: boolean = false;
  isOpenError: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    this.service
      .loginUser(
        this.loginForm.value.email ?? '',
        this.loginForm.value.password ?? ''
      )
      .then((response: User) => {
        if (response.data) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('nom', response.data.name);
          alert('connexion reussie '); //  Affichage du toast vert

          setTimeout(() => {
            this.route.navigate(['/articles']).then(() => {
              window.location.reload();
            });
          }, 3000);
        } else {
          alert('email ou mot de passe incorrect');
        }
      })
      .catch(() => {
        alert('Une erreur est survenue ');
      });
  }

  close() {
    this.isOpenError = false;
  }
}
