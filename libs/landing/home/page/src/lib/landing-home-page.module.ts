import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { LandingHomeUiAdvantagesModule } from '@olympia/landing/home/ui/advantages';
import { LandingHomeUiHeroImgModule } from '@olympia/landing/home/ui/hero-img';
import { LandingHomeUiMainCtaModule } from '@olympia/landing/home/ui/main-cta';
import { LandingHomeUiReviewFormModule } from '@olympia/landing/home/ui/review-form';
import { UiContainerModule } from '@olympia/ui/container';

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
    LandingHomeUiReviewFormModule,
    //
    RouterModule.forChild([{ path: '', component: LandingHomePageComponent }]),
  ],
  declarations: [LandingHomePageComponent],
})
export class LandingHomePageModule {}
