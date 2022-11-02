import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Prices } from '@olympia-kosiv-nx/landing/price-page/common';

@Injectable()
export class LandingPricePageApiService {
  private dbPath = 'landing';
  pricesRef: AngularFirestoreCollection<Prices>;

  constructor(private db: AngularFirestore) {
    this.pricesRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Prices> {
    return this.pricesRef;
  }
}
