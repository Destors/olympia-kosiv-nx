import { Component } from '@angular/core';
import { HeroModel } from '@olympia/landing/home/common';

export const HEROADDRESS = {
  img: '../assets/landing/img/gymMapCropped.jpg',
  title: 'Наша адресса',
  desc: 'Україна, місто Косів, Івано-Франківська область, вулиця',
};

@Component({
  selector: 'olympia-landing-contact-page',
  templateUrl: './landing-contact-page.component.html',
  styleUrls: ['./landing-contact-page.component.scss'],
})
export class LandingContactPageComponent {
  heroAddress: HeroModel;

  constructor() {
    this.heroAddress = HEROADDRESS;
  }
}
