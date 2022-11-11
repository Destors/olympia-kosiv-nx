import { Component, OnInit } from '@angular/core';
import { LandingPricePageApiService } from '@olympia-kosiv-nx/landing/price/api';
import { Prices } from '@olympia-kosiv-nx/landing/price/common';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'olympia-kosiv-nx-landing-price-page',
  templateUrl: './landing-price-page.component.html',
  styleUrls: ['./landing-price-page.component.scss'],
})
export class LandingPricePageComponent implements OnInit {
  prices$ = new Observable<Prices[]>();
  mapedPrices$ = new Observable<Prices[]>();

  preloadingSkeletonCount = new Array(4);

  constructor(private pricePageService: LandingPricePageApiService) {}

  ngOnInit() {
    this.getAllPrices();
    this.createMappedPrices();
  }

  getAllPrices() {
    this.prices$ = this.pricePageService.getAll().valueChanges();
  }

  createMappedPrices(): Observable<Prices[]> {
    return (this.mapedPrices$ = this.prices$.pipe(
      map((val) => val.map((x) => ({ ...x, price: `${x.price} грн` })))
    ));
  }
}
