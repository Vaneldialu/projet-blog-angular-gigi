import {Category} from "./category";
import {Comment} from "./comment";
import { Tag } from "./tag";

export interface ArticleApi {
  id: number,
  title: string,
  slug: string,
  photo: string,
  auteur: string,
  content: string,
  nbr_comment: number,
  nbr_vue: number,
  nb_likes: number,
  comments: Comment[],
  category: Category[],
  tags: Tag[],
  date_creation: string,
  last_modif: string,
}
