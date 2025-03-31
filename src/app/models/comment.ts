import { User } from './user';

export interface Comment {
  id: number;
  content: string;
  auteur: User;

  article_id: number;
}
