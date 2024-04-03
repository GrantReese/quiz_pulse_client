import { User } from './user';

export class Quiz {
  id!: number; //error with forms want to signify the quiz id from api
  title: string = '';
  category: string = '';
  description: string = '';
  created_date: Date = new Date();
  quiz_content: string = '';
  // this is where content goes, but not sure how to get the quiz to show here
  total_score_possible: number = 0;
  user_id?: number;
  user?: User;
}
