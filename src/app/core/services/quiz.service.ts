import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../../shared/models/quiz';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private http: HttpClient) { }

  getQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`${environment.apiUrl}/quizzes`);
  }

  createQuiz(): Observable<Quiz> {
    return this.http.post<Quiz>(`${environment.apiUrl}/quizzes`, {});
  }
}
