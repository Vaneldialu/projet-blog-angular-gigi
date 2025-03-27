import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
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
}
