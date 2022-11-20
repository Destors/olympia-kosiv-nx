import { TestBed } from '@angular/core/testing';

import { CoreThemeService } from './core-theme.service';

describe('CoreThemeServiceService', () => {
  let service: CoreThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
