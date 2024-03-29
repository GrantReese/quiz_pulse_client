import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
export const routes: Routes = [
  {
  path: '',
  pathMatch: 'full',


  loadComponent: () => import('./features/home/home.component').then((c) => c.HomeComponent),
  },

];



