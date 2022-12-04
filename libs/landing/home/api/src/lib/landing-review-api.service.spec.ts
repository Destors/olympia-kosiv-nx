import { TestBed } from '@angular/core/testing';

import { LandingReviewApiService } from './landing-review-api.service';

describe('LandingReviewApiService', () => {
  let service: LandingReviewApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingReviewApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
