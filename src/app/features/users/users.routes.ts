import {Routes} from '@angular/router';


export const USERS_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'users-list',
    pathMatch: 'full',
  },
  {
    path: 'users-list',
    loadComponent: () => import('../users/users-list/users-list').then(m => m.UsersList),
  },
];


