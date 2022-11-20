import { Component, OnInit } from '@angular/core';
import { CoreThemeService } from '@olympia-kosiv-nx/core/theme/service';
import { Observable } from 'rxjs';

@Component({
  selector: 'olympia-kosiv-nx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDarkTheme = new Observable<boolean>();

  constructor(private themeService: CoreThemeService) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
