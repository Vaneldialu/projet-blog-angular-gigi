import { Category } from './../models/category';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories : Category[] = []
  
   // Création de la function getOne
     getOne(id: number):Category | undefined {
     return this.categories.find(categorie => categorie.id == id)
     }
   
   
     //Affichage avec fetch pour les api
     async all():Promise<Category[]>{
       let rep = await fetch('http://127.0.0.1:8000/api/categories', {
         method: "GET",
         headers: {
           'Content-Type': 'application/json'
         }
         // headers : {"authorization" : "Bearer " + localStorage.getItem("token")}
         }) .then(res => res.json())
         
       return rep 
       
     }

    async storeCategory(nameParam:string, descriptionParam : string):Promise<Category>{
      const contact = {
        name: nameParam,
        description: descriptionParam
      }
  
      let rep =  await fetch('http://127.0.0.1:8000/api/categories', {
                method: 'POST',
                body: JSON.stringify(contact),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
              .then(reponse => reponse.json())
      return rep 
    }

}
