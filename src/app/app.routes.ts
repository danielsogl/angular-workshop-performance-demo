import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./features/feature-home/routes') },
  { path: 'dependency-lazy-loading', loadChildren: () => import('./features/feature-dependency-lazy-loading/routes') },
  { path: 'defer', loadChildren: () => import('./features/feature-defer/routes') },
  { path: '**', redirectTo: '' },
];
