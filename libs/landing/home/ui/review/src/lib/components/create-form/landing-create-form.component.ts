import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LandingReviewApiService } from '@olympia/landing/home/api';
import { ReviewFormField } from '@olympia/landing/home/common';

@Component({
  selector: 'olympia-landing-create-form',
  templateUrl: './landing-create-form.component.html',
  styleUrls: ['./landing-create-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingCreateFormComponent implements OnInit {
  readonly fields = ReviewFormField;

  form!: FormGroup;
  submitted = false;
  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private createApiService: LandingReviewApiService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      [ReviewFormField.Name]: new FormControl(null, [Validators.required]),
      [ReviewFormField.Comment]: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid && !this.submitted) {
      this.submitted = true;
      this.createApiService.addReview(this.form.value);
      alert('Дякуємо, Ваш відгук відправлено.');
      this.form.reset();
    }
    this.changeDetectorRef.markForCheck();
  }
}
