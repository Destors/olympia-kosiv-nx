import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  ReviewCollection,
  ReviewFormModel,
} from '@olympia/landing/home/common';

@Injectable()
export class LandingReviewApiService {
  constructor(private db: AngularFirestore) {}

  public addReview(form: ReviewFormModel) {
    try {
      this.db.collection<ReviewFormModel>(ReviewCollection.Reviews).add({
        name: form.name,
        comment: form.comment,
      });
    } catch (e) {
      console.log(e);
    }
  }
}
