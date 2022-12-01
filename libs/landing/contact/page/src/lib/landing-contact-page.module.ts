import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingHomeUiHeroImgModule } from '@olympia/landing/home/ui/hero-img';
import { UiContainerModule } from '@olympia/ui/container';

import { LandingContactPageComponent } from './landing-contact-page.component';

@NgModule({
  imports: [
    CommonModule,
    UiContainerModule,
    NgOptimizedImage,
    LandingHomeUiHeroImgModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: LandingContactPageComponent },
    ]),
  ],
  declarations: [LandingContactPageComponent],
})
export class LandingContactPageModule {}
