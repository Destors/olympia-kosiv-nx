import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  ReviewCollection,
  ReviewFormModel,
} from '@olympia/landing/home/common';
import firebase from 'firebase/compat/app';
import Timestamp = firebase.firestore.Timestamp;

@Injectable()
export class LandingReviewApiService {
  currentTimestamp = Timestamp.now();

  constructor(private db: AngularFirestore) {}

  public addReview(form: ReviewFormModel) {
    try {
      this.db.collection<ReviewFormModel>(ReviewCollection.Reviews).add({
        name: form.name,
        comment: form.comment,
        createdAt: this.currentTimestamp,
      });
    } catch (e) {
      console.log(e);
    }
  }
}
