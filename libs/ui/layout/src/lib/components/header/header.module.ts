import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UiContainerModule } from '@olympia/ui/container';

import { NavModule } from '../nav/nav.module';
import { HeaderThemeButtonModule } from './components/theme-button/header-theme-button.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    UiContainerModule,
    NavModule,
    HeaderThemeButtonModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
