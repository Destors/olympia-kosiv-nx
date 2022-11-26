import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavModule } from '../nav/nav.module';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, NavModule],
  exports: [MenuComponent],
})
export class MenuModule {}
