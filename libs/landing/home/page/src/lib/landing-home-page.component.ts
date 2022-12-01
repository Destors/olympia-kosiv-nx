import { Component } from '@angular/core';
import { HeroModel, PositionType } from '@olympia/landing/home/common';

@Component({
  selector: 'olympia-landing-home-page',
  templateUrl: './landing-home-page.component.html',
  styleUrls: ['./landing-home-page.component.scss'],
})
export class LandingHomePageComponent {
  heroTrainer: HeroModel;
  positionType: typeof PositionType = PositionType;

  constructor() {
    this.heroTrainer = {
      img: '../assets/landing/img/heroTrainer.jpg',
      title: 'Персональні тренування',
      // eslint-disable-next-line max-len
      desc: 'Ви можете тренуватися самостійно або під наглядом профессійного тренера. Отримайте індивідеальний план тренування та харчування.',
    };
  }
}
