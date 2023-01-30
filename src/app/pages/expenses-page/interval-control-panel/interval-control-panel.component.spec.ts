import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalControlPanelComponent } from './interval-control-panel.component';

describe('IntervalControlPanelComponent', () => {
  let component: IntervalControlPanelComponent;
  let fixture: ComponentFixture<IntervalControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalControlPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
