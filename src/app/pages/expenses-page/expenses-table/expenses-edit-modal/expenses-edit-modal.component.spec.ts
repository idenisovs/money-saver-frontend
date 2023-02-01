import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesEditModalComponent } from './expenses-edit-modal.component';

describe('ExpensesEditModalComponent', () => {
  let component: ExpensesEditModalComponent;
  let fixture: ComponentFixture<ExpensesEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
