import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { Prices } from '@olympia-kosiv-nx/landing/price/common';

@Component({
  selector: 'olympia-kosiv-nx-landing-price-ui-card',
  templateUrl: './landing-price-ui-card.component.html',
  styleUrls: ['./landing-price-ui-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPriceUiCardComponent  {
  @Input() price!: Prices;
  @Input() preloadingSkeleton!: boolean;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  
}
