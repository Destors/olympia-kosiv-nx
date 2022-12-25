import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UiContainerModule } from '@olympia/ui/container';

import { NavModule } from '../nav/nav.module';
import { HeaderLogoModule } from './components/header-logo/header-logo.module';
import { HeaderSocialModule } from './components/header-social/header-social.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    UiContainerModule,
    NavModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderLogoModule,
    HeaderSocialModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
