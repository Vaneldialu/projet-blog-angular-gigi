import { Category } from "./category";
import { Comment } from "./comment";

export interface ArticleApi {
      id: number,
      title: string,
      slug: string,
      photo: string,
      auteur: string,
      content: string,
      nbr_comment: number,
      comments  : Comment[],
      category: Category[],
      date_creation: string,
      last_modif: string,
}
