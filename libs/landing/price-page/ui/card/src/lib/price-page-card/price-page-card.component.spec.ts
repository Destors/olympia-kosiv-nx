import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePageCardComponent } from './price-page-card.component';

describe('PricePageCardComponent', () => {
  let component: PricePageCardComponent;
  let fixture: ComponentFixture<PricePageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricePageCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PricePageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
