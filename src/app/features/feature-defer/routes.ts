import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/defer-page/defer-page.component') }
];
export default routes;
