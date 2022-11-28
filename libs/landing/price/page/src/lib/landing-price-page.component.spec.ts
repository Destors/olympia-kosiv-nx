import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPricePageComponent } from './landing-price-page.component';

describe('LandingPricePageComponent', () => {
  let component: LandingPricePageComponent;
  let fixture: ComponentFixture<LandingPricePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPricePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPricePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
