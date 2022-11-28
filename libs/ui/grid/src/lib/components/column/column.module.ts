import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColumnComponent } from './column.component';

@NgModule({
  declarations: [ColumnComponent],
  imports: [CommonModule],
  exports: [ColumnComponent],
})
export class ColumnModule {}
