import { InjectionToken } from '@angular/core';

export interface NavigationPaths {
  home: string;
  price: string;
}

export const NAVIGATION_PATHS: NavigationPaths = {
  home: '',
  price: 'price',
};

export interface NavigationLink {
  route: string;
  label: string;
  params?: Record<string, string>;
  routerLinkActiveOptions?: { exact: boolean };
}

export const PATHS = new InjectionToken<Record<string, string>>(
  'NAVIGATION_PATHS'
);
