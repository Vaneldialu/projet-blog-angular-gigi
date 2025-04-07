import { User } from './user';

export interface Comment {
  id: number;
  content: string;
  user: {
    id: number;
    name: string;
  };
  article_id: number;
  date_creation: string;
}
