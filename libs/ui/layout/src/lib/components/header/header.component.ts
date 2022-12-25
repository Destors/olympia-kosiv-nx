import { Component } from '@angular/core';
import { CoreIconService } from '@olympia/core/icon';

import { HEADER_ICONS } from './data/header.icons';

@Component({
  selector: 'olympia-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private readonly iconService: CoreIconService) {
    for (const icon of HEADER_ICONS) {
      this.iconService.add(icon.name, icon.source);
    }
  }
}
