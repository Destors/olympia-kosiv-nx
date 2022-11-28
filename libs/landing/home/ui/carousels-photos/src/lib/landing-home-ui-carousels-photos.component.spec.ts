import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHomeUiCarouselsPhotosComponent } from './landing-home-ui-carousels-photos.component';

describe('LandingHomeUiCarouselsPhotosComponent', () => {
  let component: LandingHomeUiCarouselsPhotosComponent;
  let fixture: ComponentFixture<LandingHomeUiCarouselsPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingHomeUiCarouselsPhotosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingHomeUiCarouselsPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
