import { PhotosArrModel } from '@olympia/landing/photo/common';

const MAIN_ROOM_PHOTOS: string[] = [
  '../assets/landing/carouselsPhotos/mainRoom/1.JPG',
  '../assets/landing/carouselsPhotos/mainRoom/2.JPG',
  '../assets/landing/carouselsPhotos/mainRoom/3.JPG',
  '../assets/landing/carouselsPhotos/mainRoom/4.JPG',
  '../assets/landing/carouselsPhotos/mainRoom/5.JPG',
  '../assets/landing/carouselsPhotos/mainRoom/6.JPG',
];

const DRESSING_ROOM_PHOTOS: string[] = [
  '../assets/landing/carouselsPhotos/dressingRoom/1.JPG',
  '../assets/landing/carouselsPhotos/dressingRoom/2.JPG',
  '../assets/landing/carouselsPhotos/dressingRoom/3.JPG',
  '../assets/landing/carouselsPhotos/dressingRoom/4.JPG',
  '../assets/landing/carouselsPhotos/dressingRoom/5.JPG',
];

const POWER_ROOM_PHOTOS: string[] = [
  '../assets/landing/carouselsPhotos/powerRoom/1.JPG',
  '../assets/landing/carouselsPhotos/powerRoom/2.JPG',
  '../assets/landing/carouselsPhotos/powerRoom/3.JPG',
  '../assets/landing/carouselsPhotos/powerRoom/4.JPG',
];

const FIGHT_ROOM_PHOTOS: string[] = [
  '../assets/landing/carouselsPhotos/fightRoom/1.JPG',
  '../assets/landing/carouselsPhotos/fightRoom/2.JPG',
];

export function getCarouselPhotos(): PhotosArrModel[] {
  return [
    { title: 'Головна зала', imgArr: [...MAIN_ROOM_PHOTOS] },
    { title: 'Роздягальні та душ', imgArr: [...DRESSING_ROOM_PHOTOS] },
    { title: 'Силова зала', imgArr: [...POWER_ROOM_PHOTOS] },
    { title: 'Татамі та бородьба', imgArr: [...FIGHT_ROOM_PHOTOS] },
  ];
}
