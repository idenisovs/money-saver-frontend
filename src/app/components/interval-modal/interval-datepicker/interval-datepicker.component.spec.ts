import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalDatepickerComponent } from './interval-datepicker.component';

describe('IntervalDatepickerComponent', () => {
  let component: IntervalDatepickerComponent;
  let fixture: ComponentFixture<IntervalDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalDatepickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
