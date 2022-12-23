import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiContainerModule } from '@olympia/ui/container';

import { FooterModule } from './components/footer/footer.module';
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
    FooterModule,
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class UiLayoutModule {}
