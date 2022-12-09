import { Component, Input, OnInit } from '@angular/core';
import { CoreIconService } from '@olympia/core/icon';
import { CoreThemeService } from '@olympia/core/theme/service';
import { Observable } from 'rxjs';

import { HEADER_ICONS } from './data/header.icons';

@Component({
  selector: 'olympia-header-theme-button',
  templateUrl: './header-theme-button.component.html',
  styleUrls: ['./header-theme-button.component.scss'],
})
export class HeaderThemeButtonComponent implements OnInit {
  isDarkTheme$ = new Observable<boolean>();
  @Input() darkThame!: boolean;

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
