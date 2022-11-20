import { Component } from '@angular/core';
import { AdvantagesCard } from '@olympia-kosiv-nx/landing/home/common';

@Component({
  selector: 'olympia-kosiv-nx-landing-home-ui-advantages',
  templateUrl: './landing-home-ui-advantages.component.html',
  styleUrls: ['./landing-home-ui-advantages.component.scss'],
})
export class LandingHomeUiAdvantagesComponent {
  advCards = new Array<AdvantagesCard>();

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
        desc: 'В залі є секція для заняття боксом, мма та іншими видами боротьби.',
      },
      {
        icon: 'svg',
        title: 'Окремі роздягальні',
        desc: 'У нас є окремі роздягальні для хлопців та дівчат.',
      },
      {
        icon: 'svg',
        title: 'Душ',
        desc: 'Після тренування ви можете відвідати горячий душ.',
      },
      {
        icon: 'svg',
        title: 'Вентиляція',
        desc: 'В нашому залі встановлена сучасна система винтиляції з притоком свіжого повітря.',
      },
      {
        icon: 'svg',
        title: 'Тренери',
        desc: 'У нас працюють висококвалифіковані тренери які зможуть завжди допомогти та навчити вас.',
      },
    ];
  }
}
