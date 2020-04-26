import { User } from './user';

export interface Comment {
  id: number;
  author: User;
  title: string;
  text: string;
  likes: number;
}
