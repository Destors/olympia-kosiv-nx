import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHomeUiAdvantagesComponent } from './landing-home-ui-advantages.component';

describe('LandingHomeUiAdvantagesComponent', () => {
  let component: LandingHomeUiAdvantagesComponent;
  let fixture: ComponentFixture<LandingHomeUiAdvantagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingHomeUiAdvantagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingHomeUiAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
