import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearsPageComponent } from './years-page.component';

describe('YearsPageComponent', () => {
  let component: YearsPageComponent;
  let fixture: ComponentFixture<YearsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
