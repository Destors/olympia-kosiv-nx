import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule } from '@olympia/ui/carousel';
import { UiContainerModule } from '@olympia/ui/container';
import { UiGridModule } from '@olympia/ui/grid';

import { LandingPhotoPageComponent } from './landing-photo-page.component';

@NgModule({
  imports: [
    CommonModule,
    UiContainerModule,
    UiGridModule,
    CarouselModule,
    RouterModule.forChild([{ path: '', component: LandingPhotoPageComponent }]),
  ],
  declarations: [LandingPhotoPageComponent],
})
export class LandingPhotoPageModule {}
