import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class UiLayoutModule {}
