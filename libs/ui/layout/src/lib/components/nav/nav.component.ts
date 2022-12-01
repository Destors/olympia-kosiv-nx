import { Component, Inject, OnInit } from '@angular/core';
import {
  NavigationLink,
  NavigationPaths,
  PATHS,
} from '@olympia/core/navigation/common';

export function getLinks(paths: NavigationPaths): NavigationLink[] {
  return [
    {
      route: paths.home,
      label: 'Головна',
      routerLinkActiveOptions: {
        exact: true,
      },
    },
    {
      route: paths.photo,
      label: 'Фото',
    },
    {
      route: paths.price,
      label: 'Ціни',
    },
    {
      route: paths.contact,
      label: 'Контакти',
    },
  ];
}

@Component({
  selector: 'olympia-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  links!: NavigationLink[];
  constructor(@Inject(PATHS) public readonly paths: NavigationPaths) {}

  ngOnInit(): void {
    this.links = getLinks(this.paths);
  }

  trackByFn(index: number, link: NavigationLink): string {
    return link.route;
  }
}
