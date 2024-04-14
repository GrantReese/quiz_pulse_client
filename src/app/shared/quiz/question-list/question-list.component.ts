import { Component, Input } from '@angular/core';
import { Question } from '../../models/question';

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
