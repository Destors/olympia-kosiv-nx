import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImageModule } from '../../../../image/src/lib/image.module';
import { CarouselSlideComponent } from './carousel-slide.component';

@NgModule({
  imports: [CommonModule, ImageModule],
  declarations: [CarouselSlideComponent],
  exports: [CarouselSlideComponent],
})
export class CarouselSlideModule {}
