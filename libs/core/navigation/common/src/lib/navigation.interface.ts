import { InjectionToken } from "@angular/core";

export interface NavigationPaths {
    home: string;
}

export const NAVIGATION_PATHS: NavigationPaths = {
    home: '',
};

export const PATHS = new InjectionToken<Record<string, string>>('NAVIGATION_PATHS');