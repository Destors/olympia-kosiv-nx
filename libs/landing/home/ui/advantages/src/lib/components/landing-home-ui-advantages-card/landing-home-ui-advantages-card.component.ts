import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'olympia-kosiv-nx-landing-home-ui-advantages-card',
  templateUrl: './landing-home-ui-advantages-card.component.html',
  styleUrls: ['./landing-home-ui-advantages-card.component.scss'],
})
export class LandingHomeUiAdvantagesCardComponent implements OnInit {
  @Input() advCards!;

  constructor() {}

  ngOnInit(): void {}
}
