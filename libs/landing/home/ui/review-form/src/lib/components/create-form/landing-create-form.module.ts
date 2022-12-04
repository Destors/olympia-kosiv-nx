import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { LandingCreateFormComponent } from './landing-create-form.component';

@NgModule({
  declarations: [LandingCreateFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [LandingCreateFormComponent],
})
export class LandingCreateFormModule {}
