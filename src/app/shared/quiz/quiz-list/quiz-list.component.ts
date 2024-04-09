import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../models/quiz';
import { QuizService } from '../../../core/services/quiz.service';
@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.scss'
})
export class QuizListComponent implements OnInit {
// @Input({ required: true}) quizzes: Quiz[] = [];
quizzes: Quiz[] = [];

constructor(private quizService: QuizService) {}
ngOnInit() {
  this.quizService.getQuizzes().subscribe({
    next: (quizzes) => {
      console.log("This is our pulled data", quizzes);
      this.quizzes = quizzes;
    },
    error: (error) => {
      console.error(error);
    },
  });
}
}
