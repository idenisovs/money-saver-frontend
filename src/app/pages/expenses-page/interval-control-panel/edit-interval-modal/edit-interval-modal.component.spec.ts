import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIntervalModalComponent } from './edit-interval-modal.component';

describe('EditIntervalModalComponent', () => {
  let component: EditIntervalModalComponent;
  let fixture: ComponentFixture<EditIntervalModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditIntervalModalComponent]
    });
    fixture = TestBed.createComponent(EditIntervalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
