import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '@olympia/core/meta/service';
import { HeroImgPositionSide, HeroModel } from '@olympia/landing/home/common';

import { HERO_SPORT_FOOD, HERO_TRAINER } from './data/landing-home-page.heros';

@Component({
  selector: 'olympia-landing-home-page',
  templateUrl: './landing-home-page.component.html',
  styleUrls: ['./landing-home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingHomePageComponent {
  heroTrainer: HeroModel;
  heroSportFood: HeroModel;
  imgPositionSide: typeof HeroImgPositionSide = HeroImgPositionSide;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly metaService: MetaService
  ) {
    this.heroTrainer = HERO_TRAINER;
    this.heroSportFood = HERO_SPORT_FOOD;
    this.metaService.update();
  }
}
