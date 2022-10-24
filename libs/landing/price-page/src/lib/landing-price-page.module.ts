import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PricePageComponent } from './price-page/price-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: PricePageComponent },
    ]),
  ],
  declarations: [PricePageComponent],
})
export class LandingPricePageModule {}
