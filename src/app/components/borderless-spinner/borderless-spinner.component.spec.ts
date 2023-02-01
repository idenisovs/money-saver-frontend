import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderlessSpinnerComponent } from './borderless-spinner.component';

describe('BorderlessSpinnerComponent', () => {
  let component: BorderlessSpinnerComponent;
  let fixture: ComponentFixture<BorderlessSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderlessSpinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorderlessSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
