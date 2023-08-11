import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalFinishConfirmationModalComponent } from './interval-finish-confirmation-modal.component';

describe('IntervalFinishConfirmationModalComponent', () => {
  let component: IntervalFinishConfirmationModalComponent;
  let fixture: ComponentFixture<IntervalFinishConfirmationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalFinishConfirmationModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalFinishConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
