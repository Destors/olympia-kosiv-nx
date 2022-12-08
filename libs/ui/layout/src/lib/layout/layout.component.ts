import { Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LayoutService } from '@olympia/core/layout/service';
import { CoreThemeService } from '@olympia/core/theme/service';
import { Observable } from 'rxjs';

@Component({
  selector: 'olympia-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  readonly breakpoints = Breakpoints;

  layoutType$!: Observable<string>;

  isDarkTheme$ = new Observable<boolean>();

  constructor(
    private readonly layoutService: LayoutService,
    private themeService: CoreThemeService
  ) {}

  ngOnInit(): void {
    this.layoutType$ = this.layoutService.layoutType$;
    this.isDarkTheme$ = this.themeService.isDarkTheme$;
  }
}
