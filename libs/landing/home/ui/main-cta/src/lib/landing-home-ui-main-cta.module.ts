import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UiContainerModule } from '@olympia/ui/container';
import { UiGridModule } from '@olympia/ui/grid';

import { LandingHomeUiMainCtaComponent } from './landing-home-ui-main-cta.component';

@NgModule({
  imports: [CommonModule, UiContainerModule, UiGridModule, MatButtonModule],
  declarations: [LandingHomeUiMainCtaComponent],
  exports: [LandingHomeUiMainCtaComponent],
})
export class LandingHomeUiMainCtaModule {}
