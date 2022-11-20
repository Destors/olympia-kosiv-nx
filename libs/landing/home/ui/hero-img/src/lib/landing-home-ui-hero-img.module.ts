import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiGridModule } from '@olympia-kosiv-nx/ui/grid';

import { LandingHomeUiHeroImgComponent } from './landing-home-ui-hero-img.component';

@NgModule({
  imports: [CommonModule, UiGridModule, NgOptimizedImage],
  declarations: [LandingHomeUiHeroImgComponent],
  exports: [LandingHomeUiHeroImgComponent],
})
export class LandingHomeUiHeroImgModule {}
