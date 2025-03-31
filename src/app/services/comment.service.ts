import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

 comments:Comment[]=[];



 async addComment(id:number,auteur:string,content:string,article_id:string){
  
 }


}
