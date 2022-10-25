import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Prices } from '@olympia-kosiv-nx/landing/price-page/common';

@Component({
  selector: 'olympia-kosiv-nx-price-page-card',
  templateUrl: './price-page-card.component.html',
  styleUrls: ['./price-page-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricePageCardComponent {
  @Input() price!: Prices;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
