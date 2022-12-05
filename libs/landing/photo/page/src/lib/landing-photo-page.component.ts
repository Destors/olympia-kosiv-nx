import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PhotosArrModel } from '@olympia/landing/photo/common';

import { getCarouselPhotos } from './data/landing-home-ui-carousels-photos.imgs';

@Component({
  selector: 'olympia-landing-photo-page',
  templateUrl: './landing-photo-page.component.html',
  styleUrls: ['./landing-photo-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
