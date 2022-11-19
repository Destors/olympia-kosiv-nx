import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiGridModule } from '@olympia-kosiv-nx/ui/grid';

import { LandingHomeUiAdvantagesComponent } from './landing-home-ui-advantages.component';

@NgModule({
  imports: [CommonModule, UiGridModule],
  declarations: [LandingHomeUiAdvantagesComponent],
  exports: [LandingHomeUiAdvantagesComponent],
})
export class LandingHomeUiAdvantagesModule {}
