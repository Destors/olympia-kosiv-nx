import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AdvantagesCard } from '@olympia-kosiv-nx/landing/home/common';

@Component({
  selector: 'olympia-kosiv-nx-landing-home-ui-advantages-card',
  templateUrl: './landing-home-ui-advantages-card.component.html',
  styleUrls: ['./landing-home-ui-advantages-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingHomeUiAdvantagesCardComponent {
  @Input() advCards!: AdvantagesCard;

  constructor() {}
}
