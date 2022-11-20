export interface HeroModel {
  img: string;
  title: string;
  desc: string;
  titlePosition?: PositionType;
}

export enum PositionType {
  Left = 'left',
  Right = 'right',
}
