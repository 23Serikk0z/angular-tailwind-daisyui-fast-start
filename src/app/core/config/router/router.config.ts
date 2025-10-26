import {Routes} from '@angular/router';
import {MainLayout} from '../../../main-layout/main-layout';


export const APP_ROUTES: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'animals',
        loadChildren: () =>
          import('../../../features/animals/animals.routes').then(m => m.ANIMALS_ROUTES),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../../../features/users/users.routes').then(m => m.USERS_ROUTES),
      },
      {
        path: '',
        redirectTo: 'animals',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../../../features/auth/auth.routes').then(m => m.AUTH_ROUTES),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
