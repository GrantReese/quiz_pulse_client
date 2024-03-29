import { Component, Input } from '@angular/core';
import { Quiz } from '../../models/quiz';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.scss'
})
export class QuizListComponent {
@Input({ required: true}) quizzes: Quiz[] = [];
}
