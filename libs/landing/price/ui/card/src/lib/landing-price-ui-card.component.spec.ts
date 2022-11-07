import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPriceUiCardComponent } from './landing-price-ui-card.component';

describe('LandingPriceUiCardComponent', () => {
  let component: LandingPriceUiCardComponent;
  let fixture: ComponentFixture<LandingPriceUiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPriceUiCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPriceUiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
