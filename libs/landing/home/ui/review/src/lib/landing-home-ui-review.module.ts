import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiGridModule } from '@olympia/ui/grid';

import { LandingCreateFormModule } from './components/create-form/landing-create-form.module';
import { LandingHomeUiReviewComponent } from './landing-home-ui-review.component';

@NgModule({
  imports: [CommonModule, UiGridModule, LandingCreateFormModule],
  declarations: [LandingHomeUiReviewComponent],
  exports: [LandingHomeUiReviewComponent],
})
export class LandingHomeUiReviewFormModule {}
