import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  async loginUser(email: string, password: string): Promise<User> {
    const user = {
      email: email,
      password: password,
    };

    let rep = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify(user),
    }).then((response) => response.json());
    console.log(rep);

    return rep;
  }

  async registerUser(
    email: string,
    name: string,
    password: string,
    password_confirmation: string
  ): Promise<User> {
    const user = {
      email: email,
      name: name,
      password: password,
      password_confirmation: password_confirmation,
    };
    let rep = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    }).then((response) => response.json());

    console.log(rep);

    return rep;
  }
}
