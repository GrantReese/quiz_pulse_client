import { User } from './user';

export class Quiz {
  // id!: number; error with forms want to signify the quiz id from api
  title: string = '';
  description: string = '';
  created_date: string = '';
  quiz_content: string = '';
  // this is where content goes, but not sure how to get the quiz to show here
  total_score_possible: number = 0; // the value here should be less than or = to 100
  // created_by?: User; - not sure if this is needed
  user_id?: number;
  user?: User;
}
// new FormControl('', Validators.required)
