import { DoQuiz } from "./do-quiz";
import { Question } from "./question";
export class DoQuizAnswer {
  id!: number;
  do_quiz_id!: number;
  do_quiz?: DoQuiz;
  question_id!: number;
  question?: Question;
  answer_value!: string;
}
