import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LandingContactPageComponent } from './landing-contact-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: LandingContactPageComponent },
    ]),
  ],
  declarations: [LandingContactPageComponent],
})
export class LandingContactPageModule {}
