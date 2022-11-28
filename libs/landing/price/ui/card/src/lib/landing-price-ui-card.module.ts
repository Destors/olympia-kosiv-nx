import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LandingPriceUiPipesModule } from '@olympia-kosiv-nx/landing/price/ui/pipes';

import { LandingPriceUiCardComponent } from './landing-price-ui-card.component';

@NgModule({
  imports: [CommonModule, LandingPriceUiPipesModule],
  declarations: [LandingPriceUiCardComponent],
  exports: [LandingPriceUiCardComponent],
})
export class LandingPriceUiCardModule {}
