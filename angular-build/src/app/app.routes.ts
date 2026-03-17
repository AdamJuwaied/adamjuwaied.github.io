import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/index/index').then(m => m.Index) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
  { path: 'work', loadComponent: () => import('./pages/work/work').then(m => m.Work) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
