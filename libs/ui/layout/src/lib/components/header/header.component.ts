import { Component, OnInit } from '@angular/core';
import { CoreIconService } from '@olympia/core/icon';
import { CoreThemeService } from '@olympia/core/theme/service';
import { Observable } from 'rxjs';

import { HEADER_ICONS } from './data/header.icons';

@Component({
  selector: 'olympia-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDarkTheme$ = new Observable<boolean>();

  constructor(
    private themeService: CoreThemeService,
    private readonly iconService: CoreIconService
  ) {
    for (const icon of HEADER_ICONS) {
      this.iconService.add(icon.name, icon.source);
    }
  }

  ngOnInit() {
    this.isDarkTheme$ = this.themeService.isDarkTheme$;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
