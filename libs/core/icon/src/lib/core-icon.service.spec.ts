import { TestBed } from '@angular/core/testing';

import { CoreIconService } from './core-icon.service';

describe('CoreIconService', () => {
  let service: CoreIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
