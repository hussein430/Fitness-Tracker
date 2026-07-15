import { Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Signup } from './auth/signup/signup';
import { Login } from './auth/login/login';

export const routes: Routes = [
  {
    path: '',
    component: Welcome,
  },
  {
    path: 'signup',
    component: Signup,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'training',
    loadComponent: () => import('./training/training').then((c) => c.Training),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
