import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';
import { BASE_URL } from '../app.tokens';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = inject(BASE_URL);

  async loginUser(email: string, password: string): Promise<User> {
    const user = {
      email: email,
      password: password,
    };

    let rep = await fetch(`${this.url}/api/login`, {
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
    let rep = await fetch(`${this.url}/api/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    }).then((response) => response.json());

    console.log(rep);

    return rep;
  }

  async getInfoUser(): Promise<User> {
    let data = await fetch(`${this.url}/api/user`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
       }
    })
      .then(reponse => reponse.json())
    return data;
  }
}
