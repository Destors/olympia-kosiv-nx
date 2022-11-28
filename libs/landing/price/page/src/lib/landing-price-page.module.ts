import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingPricePageApiService } from '@olympia-kosiv-nx/landing/price/api';
import { LandingPriceUiCardModule } from '@olympia-kosiv-nx/landing/price/ui/card';
import { UiContainerModule } from '@olympia-kosiv-nx/ui/container';
import { UiGridModule } from '@olympia-kosiv-nx/ui/grid';

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
