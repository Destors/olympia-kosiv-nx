import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HeaderThemeButtonComponent } from './header-theme-button.component';

@NgModule({
  declarations: [HeaderThemeButtonComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [HeaderThemeButtonComponent],
})
export class HeaderThemeButtonModule {}
