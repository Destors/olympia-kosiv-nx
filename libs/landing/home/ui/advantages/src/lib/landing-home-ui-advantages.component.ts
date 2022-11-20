import { Component } from '@angular/core';
import { CoreIconService } from '@olympia-kosiv-nx/core/icon';
import { AdvantagesCard } from '@olympia-kosiv-nx/landing/home/common';

import { CARDS } from './common/landing-home-ui-advantages.cards';
import { ICONS } from './common/landing-home-ui-advantages.icons';

@Component({
  selector: 'olympia-kosiv-nx-landing-home-ui-advantages',
  templateUrl: './landing-home-ui-advantages.component.html',
  styleUrls: ['./landing-home-ui-advantages.component.scss'],
})
export class LandingHomeUiAdvantagesComponent {
  advCards = new Array<AdvantagesCard>();

  constructor(private readonly iconService: CoreIconService) {
    this.advCards = CARDS;

    for (const icon of ICONS) {
      this.iconService.add(icon.name, icon.source);
    }
  }
}
