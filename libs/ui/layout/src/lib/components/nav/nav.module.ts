import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav.component';
import { NavLinkModule } from './nav-link/nav-link.module';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, NavLinkModule, RouterModule],
  exports: [NavComponent],
})
export class NavModule {}
