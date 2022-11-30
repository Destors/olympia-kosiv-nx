import { Component, OnInit } from '@angular/core';
import {
  DRESSING_ROOM_PHOTOS,
  FIGHT_ROOM_PHOTOS,
  MAIN_ROOM_PHOTOS,
  OTHER_PHOTOS,
  POWER_ROOM_PHOTOS,
} from '@olympia-kosiv-nx/landing/photo/common';

@Component({
  selector: 'olympia-kosiv-nx-landing-photo-page',
  templateUrl: './landing-photo-page.component.html',
  styleUrls: ['./landing-photo-page.component.scss'],
})
export class LandingPhotoPageComponent implements OnInit {
  mainRoomPhotosArr = MAIN_ROOM_PHOTOS;
  dressingRoomArr = DRESSING_ROOM_PHOTOS;
  powerRoomArr = POWER_ROOM_PHOTOS;
  fightRoomArr = FIGHT_ROOM_PHOTOS;
  otherPhotoArr = OTHER_PHOTOS;

  constructor() {}

  ngOnInit(): void {}
}
