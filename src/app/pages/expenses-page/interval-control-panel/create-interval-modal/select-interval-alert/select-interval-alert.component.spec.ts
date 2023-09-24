import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectIntervalAlertComponent } from './select-interval-alert.component';

describe('SelectIntervalAlertComponent', () => {
  let component: SelectIntervalAlertComponent;
  let fixture: ComponentFixture<SelectIntervalAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectIntervalAlertComponent]
    });
    fixture = TestBed.createComponent(SelectIntervalAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
