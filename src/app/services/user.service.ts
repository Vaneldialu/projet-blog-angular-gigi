import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  async loginApi(emailParam : string|null, passwordParam : string|null): Promise<User>{
    const user = {
      email : emailParam,
      password : passwordParam
    }

    let rep =  await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {'Content-Type':'application/json'}
              })
              .then(reponse => reponse.json())
    console.log(rep)
        return rep ;
  }
}
