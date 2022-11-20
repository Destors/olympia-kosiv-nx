import { Component, OnInit } from '@angular/core';
import { CoreThemeService } from '@olympia-kosiv-nx/core/theme/service';
import { Observable } from 'rxjs';

@Component({
  selector: 'olympia-kosiv-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isDarkTheme = new Observable<boolean>();

  constructor(private themeService: CoreThemeService) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
}
