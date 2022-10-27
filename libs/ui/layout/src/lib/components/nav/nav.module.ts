import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavComponent } from './nav.component';
import { NavLinkModule } from './nav-link/nav-link.module';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, NavLinkModule],
  exports: [NavComponent],
})
export class NavModule {}
