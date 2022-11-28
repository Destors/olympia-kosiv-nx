import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPhotoPageComponent } from './landing-photo-page.component';

describe('LandingPhotoPageComponent', () => {
  let component: LandingPhotoPageComponent;
  let fixture: ComponentFixture<LandingPhotoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPhotoPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPhotoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
