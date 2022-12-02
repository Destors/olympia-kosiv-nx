import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Collection, Prices } from '@olympia/landing/price/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class LandingPricePageApiService {
  public pricesArr$: Observable<Prices[] | undefined> = of(undefined);

  constructor(private db: AngularFirestore) {}

  public getAllPricesArr(): Observable<Prices[] | undefined> {
    try {
      this.pricesArr$ = this.db
        .collection<Prices>(Collection.Landing, (ref) => ref)
        .valueChanges();
    } catch (e) {
      console.warn(e);
      this.pricesArr$ = of(undefined);
    }
    return this.pricesArr$;
  }
}
