import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectIntervalComponent } from './select-interval.component';

describe('SelectIntervalComponent', () => {
  let component: SelectIntervalComponent;
  let fixture: ComponentFixture<SelectIntervalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectIntervalComponent]
    });
    fixture = TestBed.createComponent(SelectIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
