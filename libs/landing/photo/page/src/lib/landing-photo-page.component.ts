import { Component } from '@angular/core';

import {
  DRESSING_ROOM_PHOTOS,
  FIGHT_ROOM_PHOTOS,
  MAIN_ROOM_PHOTOS,
  POWER_ROOM_PHOTOS,
} from './data/landing-home-ui-carousels-photos.imgs';

export interface PhotosArrModel {
  title: string;
  imgArr: string[];
}

export function getCarouselPhotos(): PhotosArrModel[] {
  return [
    { title: 'Головна зала', imgArr: [...MAIN_ROOM_PHOTOS] },
    { title: 'Роздягальні та душ', imgArr: [...DRESSING_ROOM_PHOTOS] },
    { title: 'Силова зала', imgArr: [...POWER_ROOM_PHOTOS] },
    { title: 'Татамі та бородьба', imgArr: [...FIGHT_ROOM_PHOTOS] },
  ];
}

@Component({
  selector: 'olympia-landing-photo-page',
  templateUrl: './landing-photo-page.component.html',
  styleUrls: ['./landing-photo-page.component.scss'],
})
export class LandingPhotoPageComponent {
  carouselPhotosArr: PhotosArrModel[];

  carouselColumCount = (arr: PhotosArrModel): number =>
    arr.title === 'Головна зала' ? 12 : 4;

  trackByFn(index: number, arr: PhotosArrModel): string {
    return arr.title;
  }

  constructor() {
    this.carouselPhotosArr = getCarouselPhotos();
  }
}
