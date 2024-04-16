import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../core/services/question.service';
import { Question } from '../../../shared/models/question';
import { Router } from '@angular/router';


@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.scss'
})
export class QuestionListComponent implements OnInit {
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe({
      next: (questions) => {
        console.log(questions);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
