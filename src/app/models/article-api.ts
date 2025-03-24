import { Category } from "./category";

export interface ArticleApi {
      id: number,
      title: string,
      slug: string,
      photo: string,
      auteur: string,
      content: string,
      nbr_comment: number,
      category: Category[],
      date_creation: string,
      last_modif: string,
}
