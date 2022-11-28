import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPhotoUiComponent } from './landing-home-ui-carousels-photos.component';

describe('LandingPhotoUiComponent', () => {
  let component: LandingPhotoUiComponent;
  let fixture: ComponentFixture<LandingPhotoUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPhotoUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPhotoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
