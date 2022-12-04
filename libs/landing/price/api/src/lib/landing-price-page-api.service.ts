import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CoachStatus, Collection, Prices } from '@olympia/landing/price/common';
import { map, Observable, of } from 'rxjs';

@Injectable()
export class LandingPricePageApiService {
  public pricesArr$: Observable<Prices[] | undefined> = of(undefined);

  constructor(private db: AngularFirestore) {}

  public getAllPricesArr(): Observable<Prices[] | undefined> {
    try {
      this.pricesArr$ = this.db
        .collection<Prices>(Collection.Landing)
        .valueChanges();
    } catch (e) {
      console.warn(e);
      this.pricesArr$ = of(undefined);
    }
    return this.pricesArr$;
  }

  public filterPricesWithCoach(
    prices$: Observable<Prices[] | undefined>,
    coach: CoachStatus
  ): Observable<Prices[] | undefined> {
    return prices$.pipe(
      map((val) =>
        val
          ?.sort((a, b) => {
            return a.price < b.price ? -1 : 1;
          })
          ?.filter((pricesObj) =>
            coach === 'withCoach' ? pricesObj.withCoach : !pricesObj.withCoach
          )
      )
    );
  }
}
