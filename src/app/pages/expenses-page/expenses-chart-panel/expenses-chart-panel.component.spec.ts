import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesChartPanelComponent } from './expenses-chart-panel.component';

describe('ExpensesChartPanelComponent', () => {
  let component: ExpensesChartPanelComponent;
  let fixture: ComponentFixture<ExpensesChartPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesChartPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesChartPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
