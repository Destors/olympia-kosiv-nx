import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreThemeService {
  private _darkTheme = new BehaviorSubject(true);
  isDarkTheme$ = this._darkTheme.asObservable();

  setDarkTheme(isDarkTheme: boolean) {
    this._darkTheme.next(isDarkTheme);
  }
}
