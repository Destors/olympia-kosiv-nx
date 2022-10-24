import { InjectionToken } from '@angular/core';

export interface NavigationPaths {
  home: string;
  price: string;
}

export const NAVIGATION_PATHS: NavigationPaths = {
  home: '',
  price: 'price',
};

export const PATHS = new InjectionToken<Record<string, string>>(
  'NAVIGATION_PATHS'
);
