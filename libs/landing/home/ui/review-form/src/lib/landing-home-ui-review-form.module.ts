import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiGridModule } from '@olympia/ui/grid';

import { LandingCreateFormModule } from './components/create-form/landing-create-form.module';
import { LandingHomeUiReviewFormComponent } from './landing-home-ui-review-form.component';

@NgModule({
  imports: [CommonModule, UiGridModule, LandingCreateFormModule],
  declarations: [LandingHomeUiReviewFormComponent],
  exports: [LandingHomeUiReviewFormComponent],
})
export class LandingHomeUiReviewFormModule {}
