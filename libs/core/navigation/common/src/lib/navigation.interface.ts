import { InjectionToken } from '@angular/core';

export interface NavigationPaths {
  home: string;
  price: string;
  contacts: string;
}

export const NAVIGATION_PATHS: NavigationPaths = {
  home: '',
  price: 'price',
  contacts: 'contacts',
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
