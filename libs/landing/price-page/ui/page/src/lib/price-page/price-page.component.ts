import { Component, OnInit } from '@angular/core';
import { PricePageApiService } from '@olympia-kosiv-nx/landing/price-page/api';
import { Prices } from '@olympia-kosiv-nx/landing/price-page/common';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'olympia-kosiv-nx-price-page',
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.scss'],
})
export class PricePageComponent implements OnInit {
  prices$ = new Observable<Prices[]>();
  mapedPrices$ = new Observable<Prices[]>();

  preloadingSkeletonCount = new Array(4);

  constructor(private pricePageService: PricePageApiService) {}

  ngOnInit() {
    this.getAllPrices();
    this.createMappedPrices();
  }

  getAllPrices() {
    this.prices$ = this.pricePageService.getAll().valueChanges();
  }

  createMappedPrices() {
    this.mapedPrices$ = this.prices$.pipe(
      map((val) => val.map((x) => ({ ...x, price: `${x.price} грн` })))
    );
  }
}
