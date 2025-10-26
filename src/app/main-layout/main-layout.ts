import {Component, signal} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {INavbarLink} from '../core/config/inavbar-link';
import {NavbarItem} from './navbar-item/navbar-item';


@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NavbarItem
  ],
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.css']
})
export class MainLayout {

  links: INavbarLink[] = [
    {
      path: '/animals',
      label: 'Животные',
      icon: 'pets',
      children: [
        {
          path: '/animals/animals-list',
          label: 'Список животных',
          icon: 'list',
          children: []
        }
      ]
    },
    {
      path: '/users',
      label: 'Пользователи',
      icon: 'groups',
      children: [
        {
          path: '/users/users-list',
          label: 'Список пользователей',
          icon: 'list',
          children: []
        }
      ]
    }
  ];
}
