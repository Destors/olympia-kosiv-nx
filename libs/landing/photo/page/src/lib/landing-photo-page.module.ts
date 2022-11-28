import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingPhotoUiModule } from '@olympia-kosiv-nx/landing/photo/ui';

import { LandingPhotoPageComponent } from './landing-photo-page.component';

@NgModule({
  imports: [
    CommonModule,
    LandingPhotoUiModule,
    RouterModule.forChild([{ path: '', component: LandingPhotoPageComponent }]),
  ],
  declarations: [LandingPhotoPageComponent],
})
export class LandingPhotoPageModule {}
