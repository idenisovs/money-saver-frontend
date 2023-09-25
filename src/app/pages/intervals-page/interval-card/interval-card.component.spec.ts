import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalCardComponent } from './interval-card.component';

describe('IntervalCardComponent', () => {
  let component: IntervalCardComponent;
  let fixture: ComponentFixture<IntervalCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntervalCardComponent]
    });
    fixture = TestBed.createComponent(IntervalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
