import { Route } from '@angular/router';

import { PricePageComponent } from './price-page/price-page.component';

export const landingPricePageRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: PricePageComponent },
];
