import { Component } from '@angular/core';
import { CoreIconService } from '@olympia-kosiv-nx/core/icon';
import { AdvantagesCard } from '@olympia-kosiv-nx/landing/home/common';

import { CARDS } from './common/landing-home-ui-advantages.cards';
import {
  airFlow,
  coach,
  fightIcon,
  gymIcon,
  shower,
  womanIcon,
} from './common/landing-home-ui-advantages.icons';

const ICONS: { name: string; source: string }[] = [
  {
    name: 'gymIcon',
    source: gymIcon,
  },
  {
    name: 'fightIcon',
    source: fightIcon,
  },
  {
    name: 'womanIcon',
    source: womanIcon,
  },
  {
    name: 'shower',
    source: shower,
  },
  {
    name: 'airFlow',
    source: airFlow,
  },
  {
    name: 'coach',
    source: coach,
  },
];

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
