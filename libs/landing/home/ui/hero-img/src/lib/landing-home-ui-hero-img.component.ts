import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HeroModel, PositionType } from '@olympia/landing/home/common';

@Component({
  selector: 'olympia-landing-home-ui-hero-img.',
  templateUrl: './landing-home-ui-hero-img.component.html',
  styleUrls: ['./landing-home-ui-hero-img.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingHomeUiHeroImgComponent {
  @Input() heroModel!: HeroModel;
  @Input() position!: PositionType;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
