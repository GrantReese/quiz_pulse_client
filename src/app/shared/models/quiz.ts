import { User } from './user';

export class Quiz {
  id!: number; //error with forms want to signify the quiz id from api
  title: string = '';
  category: string = '';
  description: string = '';
    total_score_possible: number = 0;
  user_id?: number;
  user?: User;
}
