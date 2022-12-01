import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingPricePageApiService } from '@olympia/landing/price/api';
import { LandingPriceUiCardModule } from '@olympia/landing/price/ui/card';
import { UiContainerModule } from '@olympia/ui/container';
import { UiGridModule } from '@olympia/ui/grid';

import { LandingPricePageComponent } from './landing-price-page.component';

@NgModule({
  imports: [
    CommonModule,
    LandingPriceUiCardModule,
    UiContainerModule,
    UiGridModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: LandingPricePageComponent },
    ]),
  ],
  declarations: [LandingPricePageComponent],
  providers: [LandingPricePageApiService],
})
export class LandingPricePageModule {}
