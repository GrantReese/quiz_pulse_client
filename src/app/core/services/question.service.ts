import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../../shared/models/question';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${environment.apiUrl}/questions`);
  }

  createQuestion(question: any): Observable<Question> {
    return this.http.post<Question>(`${environment.apiUrl}/questions`, question);
  }
}
