import { Routes } from '@angular/router';
import { PeoplesComponent } from './peoples/peoples.component';

export const routes: Routes = [
  {
    path: 'pessoa',
    loadComponent: () =>
      import('./peoples/peoples.component').then((c) => c.PeoplesComponent),
  },
  {
    path: '',
    redirectTo: 'pessoa',
    pathMatch: 'full',
  },
];
