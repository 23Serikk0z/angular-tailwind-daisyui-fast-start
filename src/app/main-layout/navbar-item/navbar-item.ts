import {Component, Input} from '@angular/core';
import {INavbarLink} from '../../core/config/inavbar-link';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar-item',
  imports: [
    RouterLink
  ],
  templateUrl: './navbar-item.html',
  styleUrl: './navbar-item.css',
})
export class NavbarItem {
  @Input() item!: INavbarLink;
}
