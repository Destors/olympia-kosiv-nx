import { Component } from '@angular/core';

@Component({
  selector: 'olympia-kosiv-nx-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  images: string[];
  constructor() {
    this.images = [
      'https://www.hussle.com/blog/wp-content/uploads/2020/10/5-exercises-full-body-1080x675.jpg',
      'https://www.hussle.com/blog/wp-content/uploads/2020/10/5-exercises-full-body-1080x675.jpg',
    ];
  }
}
