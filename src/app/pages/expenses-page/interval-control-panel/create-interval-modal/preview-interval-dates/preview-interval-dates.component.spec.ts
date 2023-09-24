import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewIntervalDatesComponent } from './preview-interval-dates.component';

describe('PreviewIntervalDatesComponent', () => {
  let component: PreviewIntervalDatesComponent;
  let fixture: ComponentFixture<PreviewIntervalDatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewIntervalDatesComponent]
    });
    fixture = TestBed.createComponent(PreviewIntervalDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
