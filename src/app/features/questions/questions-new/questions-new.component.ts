import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { QuestionService } from '../../../core/services/question.service';
import { Quiz } from '../../../shared/models/quiz';
import { Router } from '@angular/router';
import { Question } from '../../../shared/models/question';

@Component({
  selector: 'app-questions-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './questions-new.component.html',
  styleUrl: './questions-new.component.scss'
})
export class QuestionsNewComponent {
  questionForm = new FormGroup({

  });

  constructor(private questionService: QuestionService, private router: Router) {}

  onSubmit() {
    const question = this.questionForm.value;
    this.questionService.createQuestion(question).subscribe({
      next: (question: Question) => {
        console.log('Question created:', question);
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        console.error('Error creating question:', error);
      },
    });
  }

}
