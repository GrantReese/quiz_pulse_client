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
  @Input({ required: true }) questions!: Question[];

}
