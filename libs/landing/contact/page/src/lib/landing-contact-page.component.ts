import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroModel } from '@olympia/landing/home/common';

import { HERO_ADDRESS } from './data/landing-contact-page.data';

@Component({
  selector: 'olympia-landing-contact-page',
  templateUrl: './landing-contact-page.component.html',
  styleUrls: ['./landing-contact-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingContactPageComponent {
  heroAddress: HeroModel;

  constructor() {
    this.heroAddress = HERO_ADDRESS;
  }
}
