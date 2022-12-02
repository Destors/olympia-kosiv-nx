import { InjectionToken } from '@angular/core';

export interface NavigationPaths {
  home: string;
  price: string;
  photo: string;
  contact: string;
}

export const NAVIGATION_PATHS: NavigationPaths = {
  home: '',
  price: 'price',
  photo: 'photo',
  contact: 'contact',
};

export interface NavigationLink {
  route: string;
  label: string;
  icon: string;
  params?: Record<string, string>;
  routerLinkActiveOptions?: { exact: boolean };
}

export const PATHS = new InjectionToken<Record<string, string>>(
  'NAVIGATION_PATHS'
);
