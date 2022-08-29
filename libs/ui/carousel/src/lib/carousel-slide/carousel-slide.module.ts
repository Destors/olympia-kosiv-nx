import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselSlideComponent } from './carousel-slide.component';
import { ImageModule } from '../../../../image/src/lib/image.module';

@NgModule({
  imports: [CommonModule, ImageModule],
  declarations: [CarouselSlideComponent],
  exports: [CarouselSlideComponent],
})
export class CarouselSlideModule {}
