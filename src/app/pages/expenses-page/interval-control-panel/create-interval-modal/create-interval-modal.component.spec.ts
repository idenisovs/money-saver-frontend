import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIntervalModalComponent } from './create-interval-modal.component';

describe('CreateIntervalModalComponent', () => {
  let component: CreateIntervalModalComponent;
  let fixture: ComponentFixture<CreateIntervalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIntervalModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateIntervalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
