import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
  path: '',
  pathMatch: 'full',


  loadComponent: () => import('./features/home/home.component').then((c) => c.HomeComponent)
  },
  {
  path: 'login',
  loadComponent: () => import('./features/auth/login/login.component').then((c) => c.LoginComponent)
  },
  {
    path: 'quizzes/new',
    loadComponent: () => import('./features/quizzes/quizzes-new/quizzes-new.component').then((c) => c.QuizzesNewComponent)
  }
];



