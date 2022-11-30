import { Component } from '@angular/core';
import {
  DRESSING_ROOM_PHOTOS,
  FIGHT_ROOM_PHOTOS,
  MAIN_ROOM_PHOTOS,
  OTHER_PHOTOS,
  POWER_ROOM_PHOTOS,
} from '@olympia-kosiv-nx/landing/photo/common';

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
    { title: 'Тренажери та інше', imgArr: [...OTHER_PHOTOS] },
  ];
}

@Component({
  selector: 'olympia-kosiv-nx-landing-photo-page',
  templateUrl: './landing-photo-page.component.html',
  styleUrls: ['./landing-photo-page.component.scss'],
})
export class LandingPhotoPageComponent {
  carouselPhotosArr: PhotosArrModel[];

  constructor() {
    this.carouselPhotosArr = getCarouselPhotos();
  }
}
