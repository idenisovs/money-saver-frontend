import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleExpensesInputComponent } from './simple-expenses-input.component';

describe('SimpleExpensesInputComponent', () => {
  let component: SimpleExpensesInputComponent;
  let fixture: ComponentFixture<SimpleExpensesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleExpensesInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleExpensesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
