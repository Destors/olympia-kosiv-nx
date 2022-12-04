import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ReviewFormModel } from '@olympia/landing/home/common';

@Injectable()
export class LandingReviewApiService {
  constructor(private db: AngularFirestore) {}

  addReview(form: ReviewFormModel) {
    this.db.collection('reviews').add({
      name: form.name,
      comment: form.comment,
    });
  }
}
