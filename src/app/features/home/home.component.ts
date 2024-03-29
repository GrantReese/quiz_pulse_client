import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../core/services/quiz.service';
import { QuizListComponent } from '../../shared/quiz/quiz-list/quiz-list.component';
import { Quiz } from '../../shared/models/quiz';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuizListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  homeQuizzes: Quiz[] = [];

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.getQuizzes().subscribe({
      next: (quizzes) => {
        this.homeQuizzes = quizzes;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

}
