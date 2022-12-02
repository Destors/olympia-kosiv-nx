import { Component, Inject, OnInit } from '@angular/core';
import { CoreIconService } from '@olympia/core/icon';
import {
  NavigationLink,
  NavigationPaths,
  PATHS,
} from '@olympia/core/navigation/common';

import { NAV_ICONS } from './data/nav.icons';
import { getLinks } from './data/nav.links';

@Component({
  selector: 'olympia-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  links!: NavigationLink[];
  constructor(
    @Inject(PATHS) public readonly paths: NavigationPaths,
    private readonly iconService: CoreIconService
  ) {
    for (const icon of NAV_ICONS) {
      this.iconService.add(icon.name, icon.source);
    }
  }

  ngOnInit(): void {
    this.links = getLinks(this.paths);
  }

  trackByFn(index: number, link: NavigationLink): string {
    return link.route;
  }
}
