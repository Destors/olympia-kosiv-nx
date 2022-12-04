import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHomeUiReviewFormComponent } from './landing-home-ui-review-form.component';

describe('LandingHomeUiReviewFormComponent', () => {
  let component: LandingHomeUiReviewFormComponent;
  let fixture: ComponentFixture<LandingHomeUiReviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingHomeUiReviewFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingHomeUiReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
