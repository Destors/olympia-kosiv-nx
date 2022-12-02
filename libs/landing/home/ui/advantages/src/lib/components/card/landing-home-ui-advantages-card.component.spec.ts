import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHomeUiAdvantagesCardComponent } from './landing-home-ui-advantages-card.component';

describe('LandingHomeUiAdvantagesCardComponent', () => {
  let component: LandingHomeUiAdvantagesCardComponent;
  let fixture: ComponentFixture<LandingHomeUiAdvantagesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingHomeUiAdvantagesCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingHomeUiAdvantagesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
