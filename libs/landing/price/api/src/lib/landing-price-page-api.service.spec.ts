import { TestBed } from '@angular/core/testing';

import { LandingPricePageApiService } from './landing-price-page-api.service';

describe('LandingPricePageApiService', () => {
  let service: LandingPricePageApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingPricePageApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
