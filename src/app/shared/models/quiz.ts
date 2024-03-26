import { User } from './user';

export class Quiz {
  id!: number;
  title: string = '';
  decription: string = '';
  created_date: string = '';
  total_score_possible: number = 0; // the value here should be less than or = to 100
  // created_by?: User; - not sure if this is needed
  user_id?: number;
  user?: User;
}