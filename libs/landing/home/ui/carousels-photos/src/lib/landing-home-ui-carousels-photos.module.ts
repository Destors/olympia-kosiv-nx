import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from '@olympia-kosiv-nx/ui/carousel';
import { UiGridModule } from '@olympia-kosiv-nx/ui/grid';

import { LandingHomeUiCarouselsPhotosComponent } from './landing-home-ui-carousels-photos.component';

@NgModule({
  imports: [CommonModule, UiGridModule, CarouselModule],
  declarations: [LandingHomeUiCarouselsPhotosComponent],
  exports: [LandingHomeUiCarouselsPhotosComponent],
})
export class LandingHomeUiCarouselsPhotosModule {}
