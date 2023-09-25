import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAdditionalDataIntervalComponent } from './set-additional-data-interval.component';

describe('SetAdditionalDataIntervalComponent', () => {
  let component: SetAdditionalDataIntervalComponent;
  let fixture: ComponentFixture<SetAdditionalDataIntervalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetAdditionalDataIntervalComponent]
    });
    fixture = TestBed.createComponent(SetAdditionalDataIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
