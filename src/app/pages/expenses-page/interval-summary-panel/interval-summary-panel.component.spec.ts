import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalSummaryPanelComponent } from './interval-summary-panel.component';

describe('IntervalSummaryPanelComponent', () => {
  let component: IntervalSummaryPanelComponent;
  let fixture: ComponentFixture<IntervalSummaryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalSummaryPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalSummaryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
