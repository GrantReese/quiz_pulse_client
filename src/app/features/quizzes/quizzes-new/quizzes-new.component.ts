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

@Component({
  selector: 'app-quizzes-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './quizzes-new.component.html',
  styleUrl: './quizzes-new.component.scss',
})
export class QuizzesNewComponent {
  quizForm = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });

  constructor(private quizService: QuizService, private router: Router) {}

  onSubmit() {
    this.quizService.createQuiz(this.quizForm.value).subscribe({
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
