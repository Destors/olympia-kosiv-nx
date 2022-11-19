import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WebDirective } from './web.directive';

@NgModule({
  declarations: [WebDirective],
  imports: [CommonModule],
  exports: [WebDirective],
})
export class WebModule {}
