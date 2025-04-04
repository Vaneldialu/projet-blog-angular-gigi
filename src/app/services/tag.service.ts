import { inject, Injectable } from '@angular/core';
import { Tag } from '../models/tag';
import { BASE_URL } from '../app.tokens';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  tags: Tag[] = [];

  url = inject(BASE_URL);

  // Création de la function getOne
  getOneTag(id: number): Tag | undefined {
    return this.tags.find((tag) => tag.id == id);
  }

  //Affichage avec fetch pour les api
  async allTags(): Promise<Tag[]> {
    let rep = await fetch(`${this.url}/api/tags`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // headers : {"authorization" : "Bearer " + localStorage.getItem("token")}
    }).then((res) => res.json());

    return rep;
  }

  async storeTag(name: string, description: string): Promise<Tag> {
    const tagData = {
      name: name,
      description: description,
    };

    const response = await fetch(`${this.url}/api/tags`, {
      method: 'POST',
      body: JSON.stringify(tagData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la création du tag');
    }

    return await response.json();
  }
}
