import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  ReviewCollection,
  ReviewFormModel,
} from '@olympia/landing/home/common';

@Injectable()
export class LandingReviewApiService {
  constructor(private db: AngularFirestore) {}

  addReview(form: ReviewFormModel) {
    this.db.collection<ReviewFormModel>(ReviewCollection.Reviews).add({
      name: form.name,
      comment: form.comment,
    });
  }
}
