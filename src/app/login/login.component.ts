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
  styleUrl: './login.component.css'
})
export class LoginComponent {
  route:Router = inject(Router)
  service:UserService = inject(UserService)
  isConnected :boolean = false
  isOpenError :boolean = false


  loginForm = new FormGroup({
    email : new FormControl(""),
    password : new FormControl("")
  })

  connexion(){
    this.service.loginApi(
      this.loginForm.value.email??null,
      this.loginForm.value.password??null
    ).then((userApi:User) => {
      if(userApi.name !== null){
        localStorage.setItem("token", userApi.token)
        localStorage.setItem("name", userApi.name)
        localStorage.setItem("name", userApi.name)
        this.isConnected = true
        this.route.navigate(['/articles'])
      }
      else{
        this.isOpenError = true
      }
      
    }).then(()=>{
      if(!this.isConnected){
        this.route.navigate(['/'])
      }
    })
  }

  close(){
    this.isOpenError = false
  }
}
