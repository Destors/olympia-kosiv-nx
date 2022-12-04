import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiGridModule } from '@olympia/ui/grid';

import { LandingHomeUiReviewFormComponent } from './landing-home-ui-review-form.component';

@NgModule({
  imports: [CommonModule, UiGridModule],
  declarations: [LandingHomeUiReviewFormComponent],
  exports: [LandingHomeUiReviewFormComponent],
})
export class LandingHomeUiReviewFormModule {}
