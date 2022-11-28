import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { LandingHomeUiAdvantagesModule } from '@olympia-kosiv-nx/landing/home/ui/advantages';
import { LandingHomeUiCarouselsPhotosModule } from '@olympia-kosiv-nx/landing/home/ui/carousels-photos';
import { LandingHomeUiHeroImgModule } from '@olympia-kosiv-nx/landing/home/ui/hero-img';
import { LandingHomeUiMainCtaModule } from '@olympia-kosiv-nx/landing/home/ui/main-cta';
import { UiContainerModule } from '@olympia-kosiv-nx/ui/container';

import { LandingHomePageComponent } from './landing-home-page.component';

@NgModule({
  imports: [
    CommonModule,
    UiContainerModule,
    MatButtonModule,
    //  landing sections
    LandingHomeUiMainCtaModule,
    LandingHomeUiAdvantagesModule,
    LandingHomeUiHeroImgModule,
    LandingHomeUiCarouselsPhotosModule,
    //
    RouterModule.forChild([{ path: '', component: LandingHomePageComponent }]),
  ],
  declarations: [LandingHomePageComponent],
})
export class LandingHomePageModule {}
