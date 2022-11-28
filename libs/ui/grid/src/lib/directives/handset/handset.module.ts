import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HandsetDirective } from './handset.directive';

@NgModule({
  declarations: [HandsetDirective],
  imports: [CommonModule],
  exports: [HandsetDirective],
})
export class HandsetModule {}
