import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',

    loadComponent: () =>
      import('./features/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./features/auth/signup/signup.component').then(
        (c) => c.SignupComponent
      ),
  },
  {
    path: 'quizzes/new',
    loadComponent: () =>
      import('./features/quizzes/quizzes-new/quizzes-new.component').then(
        (c) => c.QuizzesNewComponent
      ),
  },

  {
    path: 'questions/new',
    loadComponent: () =>
      import('./features/questions/questions-new/questions-new.component').then(
        (c) => c.QuestionsNewComponent
      ),
  },
  {
    path: 'questions/question-list',
    loadComponent: () =>
      import('./shared/quiz/question-list/question-list.component').then(
        (c) => c.QuestionListComponent
      ),
  },
  {
    path: 'quizzes/quiz-list',
    loadComponent: () =>
      import('./shared/quiz/quiz-list/quiz-list.component').then(
        (c) => c.QuizListComponent
      ),
  },

  {
    path: 'quizzes/quizzes-delete',
    loadComponent: () =>
      import('./features/quizzes/quizzes-delete/quizzes-delete.component').then(
        (c) => c.QuizzesDeleteComponent
      ),
  }

];
