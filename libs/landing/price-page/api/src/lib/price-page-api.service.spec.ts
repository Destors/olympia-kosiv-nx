import { TestBed } from '@angular/core/testing';

import { PricePageApiService } from './price-page-api.service';

describe('PricePageApiService', () => {
  let service: PricePageApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PricePageApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
