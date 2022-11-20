import { Component } from '@angular/core';
import { HeroModel } from '@olympia-kosiv-nx/landing/home/common';

@Component({
  selector: 'olympia-kosiv-nx-landing-home-page',
  templateUrl: './landing-home-page.component.html',
  styleUrls: ['./landing-home-page.component.scss'],
})
export class LandingHomePageComponent {
  heroTrainer: HeroModel;

  constructor() {
    this.heroTrainer = {
      img: 'test',
      title: 'Персональні тренування',
      // eslint-disable-next-line max-len
      desc: 'Ви можете тренуватися самостійно або під наглядом профессійного тренера. Отримайте індивідеальний план тренування та харчування.',
    };
  }
}
