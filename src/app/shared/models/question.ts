
import { Quiz } from "./quiz";


export class Question {
  id!: number;
  score: number = 0;
  question_type: string = '';
  prompt: string = '';
  answer: string = '';
  quiz_id!: number;
  quiz?: Quiz;
}
