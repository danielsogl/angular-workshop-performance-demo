import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/dependency-lazy-loading-page/dependency-lazy-loading-page.component') }
];
export default routes;
