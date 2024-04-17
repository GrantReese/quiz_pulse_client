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

  createQuiz(quiz: any): Observable<Quiz> {
    return this.http.post<Quiz>(`${environment.apiUrl}/quizzes`, quiz);
  }
  updateQuiz(quizId: number, updatedQuiz: Quiz): Observable<Quiz> {
    return this.http.put<Quiz>(`${environment.apiUrl}/quizzes/${quizId}`, updatedQuiz);
  }

  deleteQuiz(quizId: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/quizzes/${quizId}`);
  }
}
