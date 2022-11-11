import { Component, Inject, OnInit } from '@angular/core';
import {
  NavigationLink,
  NavigationPaths,
  PATHS,
} from '@olympia-kosiv-nx/core/navigation/common';

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
  selector: 'olympia-kosiv-nx-nav',
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
