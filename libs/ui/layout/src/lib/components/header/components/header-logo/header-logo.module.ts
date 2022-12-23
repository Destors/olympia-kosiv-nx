import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { HeaderLogoComponent } from './header-logo.component';

@NgModule({
  declarations: [HeaderLogoComponent],
  imports: [CommonModule, MatIconModule],
  exports: [HeaderLogoComponent],
})
export class HeaderLogoModule {}
