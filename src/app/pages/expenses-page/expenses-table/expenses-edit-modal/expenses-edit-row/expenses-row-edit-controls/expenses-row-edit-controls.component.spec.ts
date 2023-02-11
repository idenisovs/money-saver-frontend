import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesRowEditControlsComponent } from './expenses-row-edit-controls.component';

describe('ExpensesRowEditControlsComponent', () => {
  let component: ExpensesRowEditControlsComponent;
  let fixture: ComponentFixture<ExpensesRowEditControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesRowEditControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesRowEditControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
