import { Injectable } from '@angular/core';
import { Newsletter } from '../models/newsletter';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  newsletters : Newsletter[] = []

  async storeNewsletter(emailParam:string):Promise<Newsletter>{
        const newsletterAdd = {
          email : emailParam
        }
    
        let rep =  await fetch('http://127.0.0.1:8000/api/newsletter', {
                  method: 'POST',
                  body: JSON.stringify(newsletterAdd),
                  headers: {
                    'Content-Type': 'application/json'
                  }
                })
                .then(reponse => reponse.json())
        return rep 
      }
}
