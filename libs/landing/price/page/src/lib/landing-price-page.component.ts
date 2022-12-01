import { Component } from '@angular/core';
import { LandingPricePageApiService } from '@olympia/landing/price/api';
import { Prices } from '@olympia/landing/price/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'olympia-landing-price-page',
  templateUrl: './landing-price-page.component.html',
  styleUrls: ['./landing-price-page.component.scss'],
})
export class LandingPricePageComponent {
  public prices$: Observable<Prices[] | undefined>;

  public preloadingSkeletonCount = new Array(4);

  constructor(private pricePageService: LandingPricePageApiService) {
    this.prices$ = this.pricePageService.getAllPrices();
  }

  // Creating mapped prices

  // createMappedPrices(): Observable<Prices[]> {
  //   return (this.mapedPrices$ = this.prices$.pipe(
  //     map((val) => val.map((x) => ({ ...x, price: `${x.price} грн` })))
  //   ));
  // }
}
