import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCreateFormComponent } from './landing-create-form.component';

describe('LandingCreateFormComponent', () => {
  let component: LandingCreateFormComponent;
  let fixture: ComponentFixture<LandingCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingCreateFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
