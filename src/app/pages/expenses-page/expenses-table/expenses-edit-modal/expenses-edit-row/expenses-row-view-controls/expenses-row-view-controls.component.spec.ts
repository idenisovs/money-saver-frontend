import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesRowViewControlsComponent } from './expenses-row-view-controls.component';

describe('ExpensesRowViewControlsComponent', () => {
  let component: ExpensesRowViewControlsComponent;
  let fixture: ComponentFixture<ExpensesRowViewControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesRowViewControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesRowViewControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
