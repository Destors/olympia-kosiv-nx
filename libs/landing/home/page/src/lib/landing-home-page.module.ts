import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { UiContainerModule } from '@olympia-kosiv-nx/ui/container';

import { LandingHomePageComponent } from './landing-home-page.component';

@NgModule({
  imports: [
    CommonModule,
    UiContainerModule,
    MatButtonModule,
    RouterModule.forChild([{ path: '', component: LandingHomePageComponent }]),
  ],
  declarations: [LandingHomePageComponent],
})
export class LandingHomePageModule {}
