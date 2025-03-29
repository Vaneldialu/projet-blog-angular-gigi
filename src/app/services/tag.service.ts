import { Injectable } from '@angular/core';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  tags : Tag[] = []
    
     // Création de la function getOne
       getOneTag(id: number):Tag | undefined {
       return this.tags.find(tag => tag.id == id)
       }
     
     
       //Affichage avec fetch pour les api
       async allTags():Promise<Tag[]>{
         let rep = await fetch('http://127.0.0.1:8000/api/tags', {
           method: "GET",
           headers: {
             'Content-Type': 'application/json'
           }
           // headers : {"authorization" : "Bearer " + localStorage.getItem("token")}
           }) .then(res => res.json())
           
         return rep 
         
       }
  
      async storeTag(nameParam:string, descriptionParam : string):Promise<Tag>{
        const contact = {
          name: nameParam,
          description: descriptionParam
        }
    
        let rep =  await fetch('http://127.0.0.1:8000/api/tags', {
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
