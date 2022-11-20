import { Component } from '@angular/core';

export interface AdvCardModel {
  icon: string;
  title: string;
  desc: string;
}
@Component({
  selector: 'olympia-kosiv-nx-landing-home-ui-advantages',
  templateUrl: './landing-home-ui-advantages.component.html',
  styleUrls: ['./landing-home-ui-advantages.component.scss'],
})
export class LandingHomeUiAdvantagesComponent {
  advCards = new Array<AdvCardModel>();

  constructor() {
    this.advCards = [
      {
        icon: 'svg',
        title: 'Тренажерний зал',
        desc: 'Займайтеся бодибілденгом, фітнесом або паверлфітенгом сучасному залі з великим вибором тренажерів.',
      },
      {
        icon: 'svg',
        title: 'Боротьба',
        desc: 'Окрема секція для заняття боксом, мма та іншими видами боротьби',
      },
    ];
  }
}
