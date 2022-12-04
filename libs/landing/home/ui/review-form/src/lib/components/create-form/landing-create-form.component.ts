import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateFormField } from '@olympia/landing/home/common';

@Component({
  selector: 'olympia-landing-create-form',
  templateUrl: './landing-create-form.component.html',
  styleUrls: ['./landing-create-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingCreateFormComponent implements OnInit {
  readonly fields = CreateFormField;

  form!: FormGroup;
  submitted = false;
  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      [CreateFormField.Name]: new FormControl(null, [Validators.required]),
      [CreateFormField.Comment]: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid && !this.submitted) {
      this.submitted = true;
      // this.create.createForm(this.form.value);
    }

    this.changeDetectorRef.markForCheck();
  }
}
