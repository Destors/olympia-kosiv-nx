import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiContainerModule } from '@olympia-kosiv-nx/ui/container';

import { landingPricePageRoutes } from './lib.routes';
import { PricePageComponent } from './price-page/price-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(landingPricePageRoutes),
    UiContainerModule,
  ],
  declarations: [PricePageComponent],
})
export class LandingPricePageModule {}
