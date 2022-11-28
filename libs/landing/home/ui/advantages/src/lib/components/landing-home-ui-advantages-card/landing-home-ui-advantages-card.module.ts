import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { LandingHomeUiAdvantagesCardComponent } from './landing-home-ui-advantages-card.component';

@NgModule({
  declarations: [LandingHomeUiAdvantagesCardComponent],
  imports: [CommonModule, MatIconModule],
  exports: [LandingHomeUiAdvantagesCardComponent],
})
export class LandingHomeUiAdvantagesCardModule {}
