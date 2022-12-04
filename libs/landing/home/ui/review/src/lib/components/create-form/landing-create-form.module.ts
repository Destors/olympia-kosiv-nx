import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { LandingHomeApiModule } from '@olympia/landing/home/api';

import { LandingCreateFormComponent } from './landing-create-form.component';

@NgModule({
  declarations: [LandingCreateFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    LandingHomeApiModule,
  ],
  exports: [LandingCreateFormComponent],
})
export class LandingCreateFormModule {}
