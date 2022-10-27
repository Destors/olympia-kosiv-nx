import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiContainerModule } from '@olympia-kosiv-nx/ui/container';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, UiContainerModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
