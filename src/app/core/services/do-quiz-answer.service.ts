import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DoQuizAnswer } from '../../shared/models/do-quiz-answer';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class DoQuizAnswerService {
  constructor(private http: HttpClient) { }

  getDoQuizAnswer(): Observable<DoQuizAnswer[]> {
    return this.http.get<DoQuizAnswer[]>(`${environment.apiUrl}/do-quiz-answers`);
  }

  createDoQuizAnswer(doQuizAnswer: any): Observable<DoQuizAnswer> {
    return this.http.post<DoQuizAnswer>(`${environment.apiUrl}/do-quiz-answers`, doQuizAnswer);
  }
}
