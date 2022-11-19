import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TabletDirective } from './tablet.directive';

@NgModule({
  declarations: [TabletDirective],
  imports: [CommonModule],
  exports: [TabletDirective],
})
export class TabletModule {}
