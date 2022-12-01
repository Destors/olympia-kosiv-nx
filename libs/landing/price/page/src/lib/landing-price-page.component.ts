import { Component } from '@angular/core';
import { LandingPricePageApiService } from '@olympia/landing/price/api';
import { Prices } from '@olympia/landing/price/common';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'olympia-landing-price-page',
  templateUrl: './landing-price-page.component.html',
  styleUrls: ['./landing-price-page.component.scss'],
})
export class LandingPricePageComponent {
  preloadingSkeletonCount = new Array(4);

  prices$: Observable<Prices[] | undefined>;
  pricesWithCoach$: Observable<Prices[] | undefined>;
  pricesWithoutCoach$: Observable<Prices[] | undefined>;

  constructor(private pricePageService: LandingPricePageApiService) {
    this.prices$ = this.pricePageService.getAllPrices();
    this.pricesWithCoach$ = this.filterPricesWithCoach(true);
    this.pricesWithoutCoach$ = this.filterPricesWithCoach(false);
  }

  filterPricesWithCoach(coach: boolean): Observable<Prices[] | undefined> {
    return this.prices$.pipe(
      map((val) =>
        val
          ?.sort((a, b) => {
            return a.price < b.price ? -1 : 1;
          })
          ?.filter((x) => (coach ? x.withCoach : !x.withCoach))
      )
    );
  }
}
