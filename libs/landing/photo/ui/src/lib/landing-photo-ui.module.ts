import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from '@olympia-kosiv-nx/ui/carousel';
import { UiContainerModule } from '@olympia-kosiv-nx/ui/container';
import { UiGridModule } from '@olympia-kosiv-nx/ui/grid';

import { LandingPhotoUiComponent } from './landing-home-ui-carousels-photos.component';

@NgModule({
  imports: [CommonModule, UiContainerModule, UiGridModule, CarouselModule],
  declarations: [LandingPhotoUiComponent],
  exports: [LandingPhotoUiComponent],
})
export class LandingPhotoUiModule {}
