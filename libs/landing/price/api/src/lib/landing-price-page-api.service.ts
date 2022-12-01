import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Prices } from '@olympia/landing/price/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class LandingPricePageApiService {
  private dbPath = 'landing';
  public pricesArr$: Observable<Prices[] | undefined> = of(undefined);
  // pricesRef: AngularFirestoreCollection<Prices>;

  constructor(private db: AngularFirestore) {
    // this.pricesRef = db.collection(this.dbPath);
  }

  // getAll(): AngularFirestoreCollection<Prices> {
  //   return this.pricesRef;
  // }

  public getAllPrices(): Observable<Prices[] | undefined> {
    try {
      this.pricesArr$ = this.db
        .collection<Prices>(this.dbPath, (ref) => ref)
        .valueChanges();
    } catch (e) {
      console.warn(e);
      this.pricesArr$ = of(undefined);
    }
    return this.pricesArr$;
  }
}
