import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalsPageComponent } from './intervals-page.component';

describe('IntervalsPageComponent', () => {
  let component: IntervalsPageComponent;
  let fixture: ComponentFixture<IntervalsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
