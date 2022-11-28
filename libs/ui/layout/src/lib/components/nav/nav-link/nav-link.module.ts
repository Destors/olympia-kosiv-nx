import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavLinkComponent } from './nav-link.component';

@NgModule({
  declarations: [NavLinkComponent],
  imports: [CommonModule],
  exports: [NavLinkComponent],
})
export class NavLinkModule {}
