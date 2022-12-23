import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { HeaderSocialComponent } from './header-social.component';

@NgModule({
  declarations: [HeaderSocialComponent],
  imports: [CommonModule, MatIconModule],
  exports: [HeaderSocialComponent],
})
export class HeaderSocialModule {}
