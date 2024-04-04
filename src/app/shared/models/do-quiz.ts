import { User } from "./user";
import { Quiz } from "./quiz";
export class DoQuiz {
  id!: number;
  user_id!: number;
  user?: User;
  quiz_id!: number;
  quiz?: Quiz;
}
