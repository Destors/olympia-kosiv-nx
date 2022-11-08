import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LandingPricePageComponent } from './landing-price-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: LandingPricePageComponent },
    ]),
  ],
  declarations: [LandingPricePageComponent],
})
export class LandingPricePageModule {}
