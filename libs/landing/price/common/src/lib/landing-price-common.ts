export interface Prices {
  name: string;
  price: number;
  desc: string;
  withCoach: boolean;
}

export enum CoachStatus {
  WithCoach = 'withCoach',
  WithoutCoach = 'withoutCoach',
}
