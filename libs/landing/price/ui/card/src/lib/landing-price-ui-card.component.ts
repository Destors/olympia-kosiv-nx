import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Prices } from '@olympia/landing/price/common';

@Component({
  selector: 'olympia-landing-price-ui-card',
  templateUrl: './landing-price-ui-card.component.html',
  styleUrls: ['./landing-price-ui-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPriceUiCardComponent {
  @Input() price!: Prices;
  @Input() preloadingSkeleton!: boolean;

  getClassOfCard(val: string) {
    switch (val) {
      case '8 Занять':
      case '12 Занять':
      case '8 Занять з Тренером':
      case '12 Занять з Тренером':
        return 'card--popular';
      default:
        return null;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
