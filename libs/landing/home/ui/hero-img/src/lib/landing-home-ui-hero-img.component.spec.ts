import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHomeUiHeroImgComponent } from './landing-home-ui-hero-img..component';

describe('LandingHomeUiHeroImgComponent', () => {
  let component: LandingHomeUiHeroImgComponent;
  let fixture: ComponentFixture<LandingHomeUiHeroImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingHomeUiHeroImgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingHomeUiHeroImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
