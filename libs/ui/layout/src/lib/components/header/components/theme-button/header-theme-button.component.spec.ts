import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderThemeButtonComponent } from './header-theme-button.component';

describe('HeaderThemeButtonComponent', () => {
  let component: HeaderThemeButtonComponent;
  let fixture: ComponentFixture<HeaderThemeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderThemeButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderThemeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
