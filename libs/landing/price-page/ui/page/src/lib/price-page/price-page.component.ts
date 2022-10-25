import { Component, OnInit } from '@angular/core';
import { PricePageApiService } from '@olympia-kosiv-nx/landing/price-page/api';
import { Prices } from '@olympia-kosiv-nx/landing/price-page/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'olympia-kosiv-nx-price-page',
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.scss'],
})
export class PricePageComponent implements OnInit {
  prices$ = new Observable<Prices[]>();

  constructor(private pricePageService: PricePageApiService) {}

  ngOnInit() {
    this.retrivePrices();
  }

  retrivePrices() {
    this.prices$ = this.pricePageService.getAll().valueChanges();
  }
}
