import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiContainerModule } from '@olympia/ui/container';
import { UiGridModule } from '@olympia/ui/grid';

import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, UiContainerModule, UiGridModule],
  exports: [FooterComponent],
})
export class FooterModule {}
