import { inject, Injectable } from '@angular/core';
import { Newsletter } from '../models/newsletter';
import { BASE_URL } from '../app.tokens';

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  newsletters: Newsletter[] = [];
  url = inject(BASE_URL);

  async storeNewsletter(emailParam: string): Promise<Newsletter> {
    const newsletterAdd = {
      email: emailParam,
    };

    let rep = await fetch(`${this.url}/api/newsletters`, {
      method: 'POST',
      body: JSON.stringify(newsletterAdd),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((reponse) => reponse.json());
    return rep;
  }
}
