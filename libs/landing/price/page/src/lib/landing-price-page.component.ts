import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LandingPricePageApiService } from '@olympia/landing/price/api';
import { CoachStatus, Prices } from '@olympia/landing/price/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'olympia-landing-price-page',
  templateUrl: './landing-price-page.component.html',
  styleUrls: ['./landing-price-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPricePageComponent {
  preloadingSkeletonCount = new Array(4);

  allPricesArr$: Observable<Prices[] | undefined>;
  pricesWithCoach$: Observable<Prices[] | undefined>;
  pricesWithoutCoach$: Observable<Prices[] | undefined>;

  constructor(private pricePageService: LandingPricePageApiService) {
    this.allPricesArr$ = this.pricePageService.getAllPricesArr();

    this.pricesWithCoach$ = this.pricePageService.filterPricesWithCoach(
      this.allPricesArr$,
      CoachStatus.WithCoach
    );
    this.pricesWithoutCoach$ = this.pricePageService.filterPricesWithCoach(
      this.allPricesArr$,
      CoachStatus.WithoutCoach
    );
  }
}
