import { Component } from '@angular/core';
import { HeroImgPositionSide, HeroModel } from '@olympia/landing/home/common';

import { HERO_SPORT_FOOD, HERO_TRAINER } from './data/landing-home-page.heros';

@Component({
  selector: 'olympia-landing-home-page',
  templateUrl: './landing-home-page.component.html',
  styleUrls: ['./landing-home-page.component.scss'],
})
export class LandingHomePageComponent {
  heroTrainer: HeroModel;
  heroSportFood: HeroModel;
  positionType: typeof HeroImgPositionSide = HeroImgPositionSide;

  constructor() {
    this.heroTrainer = HERO_TRAINER;
    this.heroSportFood = HERO_SPORT_FOOD;
  }
}
