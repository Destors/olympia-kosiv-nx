import { Component } from '@angular/core';

import { MAIN_ROOM_PHOTOS } from './common/landing-home-ui-carousels-photos.imgs';

@Component({
  selector: 'olympia-kosiv-nx-landing-home-ui-carousels-photos',
  templateUrl: './landing-home-ui-carousels-photos.component.html',
  styleUrls: ['./landing-home-ui-carousels-photos.component.scss'],
})
export class LandingHomeUiCarouselsPhotosComponent {
  mainRoomPhotosArr = MAIN_ROOM_PHOTOS;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
