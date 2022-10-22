import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiContainerModule } from '@olympia-kosiv-nx/ui/container';

import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [CommonModule, RouterModule, UiContainerModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class UiLayoutModule {}
