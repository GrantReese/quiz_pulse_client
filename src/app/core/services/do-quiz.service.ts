import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DoQuiz } from '../../shared/models/do-quiz';
@Injectable({
  providedIn: 'root'
})


export class DoQuizService {
  constructor(private http: HttpClient) { }

  getDoQuiz(): Observable<DoQuiz[]> {
    return this.http.get<DoQuiz[]>(`${environment.apiUrl}/do-quiz`);

  }
  createDoQuiz(doquiz: any): Observable<DoQuiz> {
    return this.http.post<DoQuiz>(`${environment.apiUrl}/do-quiz`, doquiz); // not sure if doquiz is right formatting
  }
  }
