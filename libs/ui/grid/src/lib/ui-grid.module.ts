import { NgModule } from '@angular/core';

import { ColumnModule } from './components/column/column.module';
import { RowModule } from './components/row/row.module';

@NgModule({
  imports: [ColumnModule, RowModule],
})
export class UiGridModule {}
