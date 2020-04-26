import {Specialist} from './specialist';

export interface User {
  id: number;
  login: string;
  password: string;
  name: string;
  last_name: string;
  email: string;
  image: string;
  saved: Specialist[];
  user_specialists: Specialist[];
}
