import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiContainerModule } from '@olympia-kosiv-nx/ui/container';

import { LandingContactPageComponent } from './landing-contact-page.component';

@NgModule({
  imports: [
    CommonModule,
    UiContainerModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: LandingContactPageComponent },
    ]),
  ],
  declarations: [LandingContactPageComponent],
})
export class LandingContactPageModule {}
