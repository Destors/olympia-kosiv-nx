import { InjectionToken } from '@angular/core';

export interface Environments {
  production: boolean;
  brand: string;
  phone: string;
  appHost: string;
}

export const ENVIRONMENTS = new InjectionToken<Environments>('ENVIRONMENTS');

export const ENVIRONMENTS_DEFAULT: Environments = {
  production: false,
  brand: 'Olympia-Kosiv',
  phone: '+380962723719',
  appHost: 'https://olympia-kosiv.com',
};
