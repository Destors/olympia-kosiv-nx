import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingContactPageComponent } from './landing-contact-page.component';

describe('LandingContactPageComponent', () => {
  let component: LandingContactPageComponent;
  let fixture: ComponentFixture<LandingContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingContactPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
