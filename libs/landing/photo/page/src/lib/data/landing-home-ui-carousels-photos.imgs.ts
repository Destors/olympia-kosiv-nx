import { PhotosArrModel } from '@olympia/landing/photo/common';

const mainRoomPhotos: string[] = [
  '../assets/landing/carouselsPhotos/mainRoom/1.JPG',
  '../assets/landing/carouselsPhotos/mainRoom/2.JPG',
  '../assets/landing/carouselsPhotos/mainRoom/3.JPG',
  '../assets/landing/carouselsPhotos/mainRoom/4.JPG',
  '../assets/landing/carouselsPhotos/mainRoom/5.JPG',
  '../assets/landing/carouselsPhotos/mainRoom/6.JPG',
];

const dressingRoomPhotos: string[] = [
  '../assets/landing/carouselsPhotos/dressingRoom/1.JPG',
  '../assets/landing/carouselsPhotos/dressingRoom/2.JPG',
  '../assets/landing/carouselsPhotos/dressingRoom/3.JPG',
  '../assets/landing/carouselsPhotos/dressingRoom/4.JPG',
  '../assets/landing/carouselsPhotos/dressingRoom/5.JPG',
];

const powerRoomPhotos: string[] = [
  '../assets/landing/carouselsPhotos/powerRoom/1.JPG',
  '../assets/landing/carouselsPhotos/powerRoom/2.JPG',
  '../assets/landing/carouselsPhotos/powerRoom/3.JPG',
  '../assets/landing/carouselsPhotos/powerRoom/4.JPG',
];

const fightRoomPhotos: string[] = [
  '../assets/landing/carouselsPhotos/fightRoom/1.JPG',
  '../assets/landing/carouselsPhotos/fightRoom/2.JPG',
];

export function getCarouselPhotos(): PhotosArrModel[] {
  return [
    { title: 'Головна зала', imgArr: [...mainRoomPhotos] },
    { title: 'Роздягальні та душ', imgArr: [...dressingRoomPhotos] },
    { title: 'Силова зала', imgArr: [...powerRoomPhotos] },
    { title: 'Татамі та бородьба', imgArr: [...fightRoomPhotos] },
  ];
}
