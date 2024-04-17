import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../core/services/quiz.service';
import { Router } from '@angular/router';
import { Quiz } from '../../../shared/models/quiz';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quizzes-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quizzes-delete.component.html',
  styleUrl: './quizzes-delete.component.scss'
})
export class QuizzesDeleteComponent implements OnInit {
  quizzes: Quiz[] = [];

  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit(): void {
    this.loadQuizzes();
  }

  loadQuizzes() {
    this.quizService.getQuizzes().subscribe(
      (quizzes: Quiz[]) => {
        this.quizzes = quizzes;
      },
      (error) => {
        console.error('Error fetching quizzes:', error);
        // Handle error gracefully
      }
    );
  }

  deleteQuiz(quizId: number) {
    if (confirm('Are you sure you want to delete this quiz?')) {
      this.quizService.deleteQuiz(quizId).subscribe(
        () => {
          console.log(`Quiz with ID ${quizId} deleted successfully.`);
          this.router.navigate(['/']);

          // this.loadQuizzes();
        },
        (error) => {
          console.error('Error deleting quiz:', error);
          // Handle error gracefully, e.g., show error message to the user
        }
      );
    }
  }
}
