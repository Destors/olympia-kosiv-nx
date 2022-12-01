import { Component } from '@angular/core';
import { LandingPricePageApiService } from '@olympia/landing/price/api';
import { Prices } from '@olympia/landing/price/common';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'olympia-landing-price-page',
  templateUrl: './landing-price-page.component.html',
  styleUrls: ['./landing-price-page.component.scss'],
})
export class LandingPricePageComponent {
  prices$: Observable<Prices[] | undefined>;
  pricesWithCoach$: Observable<Prices[] | undefined>;
  pricesWithoutCoach$: Observable<Prices[] | undefined>;

  preloadingSkeletonCount = new Array(4);

  constructor(private pricePageService: LandingPricePageApiService) {
    this.prices$ = this.pricePageService.getAllPrices();

    this.pricesWithCoach$ = this.getPricesWithCoach(true);
    this.pricesWithoutCoach$ = this.getPricesWithCoach(false);
  }

  getPricesWithCoach(coach: boolean): Observable<Prices[] | undefined> {
    return this.prices$.pipe(
      map((val) => val?.filter((x) => (coach ? x.withCoach : !x.withCoach)))
    );
  }

  // Creating mapped prices

  // createMappedPrices(): Observable<Prices[]> {
  //   return (this.mapedPrices$ = this.prices$.pipe(
  //     map((val) => val.map((x) => ({ ...x, price: `${x.price} грн` })))
  //   ));
  // }
}
