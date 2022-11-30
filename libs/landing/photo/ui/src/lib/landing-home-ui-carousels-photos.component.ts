import { Component } from '@angular/core';
import {
  DRESSING_ROOM_PHOTOS,
  FIGHT_ROOM_PHOTOS,
  MAIN_ROOM_PHOTOS,
  OTHER_PHOTOS,
  POWER_ROOM_PHOTOS,
} from '@olympia-kosiv-nx/landing/photo/common';

@Component({
  selector: 'olympia-kosiv-nx-landing-home-ui-carousels-photos',
  templateUrl: './landing-home-ui-carousels-photos.component.html',
  styleUrls: ['./landing-home-ui-carousels-photos.component.scss'],
})
export class LandingPhotoUiComponent {
  mainRoomPhotosArr = MAIN_ROOM_PHOTOS;
  dressingRoomArr = DRESSING_ROOM_PHOTOS;
  powerRoomArr = POWER_ROOM_PHOTOS;
  fightRoomArr = FIGHT_ROOM_PHOTOS;
  otherPhotoArr = OTHER_PHOTOS;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
