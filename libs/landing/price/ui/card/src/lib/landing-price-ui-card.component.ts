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

  public getClassOfCard(val: string): Record<string, boolean> {
    return {
      popular: [
        '8 Занять',
        '12 Занять',
        '8 Занять з Тренером',
        '12 Занять з Тренером',
      ].includes(val),
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
