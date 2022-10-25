import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PricePageApiService } from '@olympia-kosiv-nx/landing/price-page/api';

import { PricePageComponent } from './price-page/price-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: PricePageComponent },
    ]),
  ],
  declarations: [PricePageComponent],
  providers: [PricePageApiService],
})
export class LandingPricePageUiPageModule {}
