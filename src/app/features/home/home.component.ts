import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../core/services/quiz.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(
    private quizService: QuizService
  ) { }

  ngOnInit(): void {
    this.quizService.getQuizzes().subscribe({
      next: (quizzes) => {
        console.log(quizzes);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

}
