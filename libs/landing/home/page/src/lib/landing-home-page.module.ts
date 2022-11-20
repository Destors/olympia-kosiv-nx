import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { LandingHomeUiAdvantagesModule } from '@olympia-kosiv-nx/landing/home/ui/advantages';
import { LandingHomeUiHeroImgModule } from '@olympia-kosiv-nx/landing/home/ui/hero-img';
import { UiContainerModule } from '@olympia-kosiv-nx/ui/container';

import { LandingHomePageComponent } from './landing-home-page.component';

@NgModule({
  imports: [
    CommonModule,
    UiContainerModule,
    MatButtonModule,
    LandingHomeUiAdvantagesModule,
    LandingHomeUiHeroImgModule,
    RouterModule.forChild([{ path: '', component: LandingHomePageComponent }]),
  ],
  declarations: [LandingHomePageComponent],
})
export class LandingHomePageModule {}
