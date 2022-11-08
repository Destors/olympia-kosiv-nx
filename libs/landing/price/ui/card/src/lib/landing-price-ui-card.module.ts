import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LandingPriceUiCardComponent } from './landing-price-ui-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LandingPriceUiCardComponent],
  exports: [LandingPriceUiCardComponent],
})
export class LandingPriceUiCardModule {}
