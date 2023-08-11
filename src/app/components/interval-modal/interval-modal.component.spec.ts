import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalModalComponent } from './interval-modal.component';

describe('IntervalModalComponent', () => {
  let component: IntervalModalComponent;
  let fixture: ComponentFixture<IntervalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
