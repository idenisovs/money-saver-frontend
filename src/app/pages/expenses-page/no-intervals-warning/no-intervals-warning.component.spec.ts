import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoIntervalsWarningComponent } from './no-intervals-warning.component';

describe('NoIntervalsWarningComponent', () => {
  let component: NoIntervalsWarningComponent;
  let fixture: ComponentFixture<NoIntervalsWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoIntervalsWarningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoIntervalsWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
