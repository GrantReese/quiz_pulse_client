import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../models/question';
import { QuestionService } from '../../../core/services/question.service';
@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.scss'
})
export class QuestionListComponent {
  questions: Question[] = [];

  constructor(private questionService: QuestionService) {}
  ngOnInit() {
    this.questionService.getQuestions().subscribe({
      next: (questions) => {
        console.log("This is our pulled data", questions);
        this.questions = questions;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  }
