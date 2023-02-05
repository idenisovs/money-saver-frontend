import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesEditRowComponent } from './expenses-edit-row.component';

describe('ExpensesEditRowComponent', () => {
  let component: ExpensesEditRowComponent;
  let fixture: ComponentFixture<ExpensesEditRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesEditRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesEditRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
