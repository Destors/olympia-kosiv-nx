import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiGridModule } from '@olympia-kosiv-nx/ui/grid';

import { LandingHomeUiAdvantagesCardModule } from './components/landing-home-ui-advantages-card/landing-home-ui-advantages-card.module';
import { LandingHomeUiAdvantagesComponent } from './landing-home-ui-advantages.component';

@NgModule({
  imports: [CommonModule, UiGridModule, LandingHomeUiAdvantagesCardModule],
  declarations: [LandingHomeUiAdvantagesComponent],
  exports: [LandingHomeUiAdvantagesComponent],
})
export class LandingHomeUiAdvantagesModule {}
