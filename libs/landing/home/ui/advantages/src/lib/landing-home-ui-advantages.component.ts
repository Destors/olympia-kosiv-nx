import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CoreIconService } from '@olympia/core/icon';
import { AdvantagesCard } from '@olympia/landing/home/common';

import { CARDS } from './data/landing-home-ui-advantages.cards';
import { ICONS } from './data/landing-home-ui-advantages.icons';

@Component({
  selector: 'olympia-landing-home-ui-advantages',
  templateUrl: './landing-home-ui-advantages.component.html',
  styleUrls: ['./landing-home-ui-advantages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
