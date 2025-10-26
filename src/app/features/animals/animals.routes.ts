import {Routes} from '@angular/router';
import { Animals } from './animals';
import {AnimalList} from './animal-list/animal-list';


export const ANIMALS_ROUTES: Routes = [
  {
    path: '',
    component: Animals,
    children: [
      { path: '', component: AnimalList },
      { path: 'animals-list', component: AnimalList },
    ],
  },
];
