import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiContainerModule } from '@olympia/ui/container';

import { HeaderModule } from './components/header/header.module';
import { MenuModule } from './components/menu/menu.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UiContainerModule,
    HeaderModule,
    MenuModule,
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class UiLayoutModule {}
