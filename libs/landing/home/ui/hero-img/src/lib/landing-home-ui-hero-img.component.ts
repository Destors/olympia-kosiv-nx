import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HeroModel } from '@olympia-kosiv-nx/landing/home/common';

@Component({
  selector: 'olympia-kosiv-nx-landing-home-ui-hero-img.',
  templateUrl: './landing-home-ui-hero-img.component.html',
  styleUrls: ['./landing-home-ui-hero-img.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingHomeUiHeroImgComponent {
  @Input() heroModel!: HeroModel;
  constructor() {}
}
