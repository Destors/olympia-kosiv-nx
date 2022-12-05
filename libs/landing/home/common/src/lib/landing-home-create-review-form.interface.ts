import firebase from 'firebase/compat/app';
import Timestamp = firebase.firestore.Timestamp;

export interface ReviewFormModel {
  name: string;
  comment: string;
  createdAt?: Timestamp;
}

export enum ReviewFormField {
  Name = 'name',
  Comment = 'comment',
}
