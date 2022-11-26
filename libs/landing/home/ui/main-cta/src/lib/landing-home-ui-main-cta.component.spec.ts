import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHomeUiMainCtaComponent } from './landing-home-ui-main-cta.component';

describe('LandingHomeUiMainCtaComponent', () => {
  let component: LandingHomeUiMainCtaComponent;
  let fixture: ComponentFixture<LandingHomeUiMainCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingHomeUiMainCtaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingHomeUiMainCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
