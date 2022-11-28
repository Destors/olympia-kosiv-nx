import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LandingPhotoPageComponent } from './landing-photo-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LandingPhotoPageComponent }]),
  ],
  declarations: [LandingPhotoPageComponent],
})
export class LandingPhotoPageModule {}
