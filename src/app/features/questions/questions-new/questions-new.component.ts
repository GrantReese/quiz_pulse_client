import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { QuizService } from '../../../core/services/quiz.service';
import { Quiz } from '../../../shared/models/quiz';
import { Router } from '@angular/router';
import { Answer } from '../../../shared/models/answer';

@Component({
  selector: 'app-questions-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './questions-new.component.html',
  styleUrl: './questions-new.component.scss'
})
export class QuestionsNewComponent {
  answerForm = new FormGroup({

  });

  constructor(private answerService: AnswerService, private router: Router) {}

  onSubmit() {
    const quiz = this.quizForm.value;
    this.quizService.createQuiz(quiz).subscribe({
      next: (quiz: Quiz) => {
        console.log('Quiz created:', quiz);
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        console.error('Error creating quiz:', error);
      },
    });
  }

}
