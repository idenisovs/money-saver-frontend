import { TestBed } from '@angular/core/testing';

import { IntervalHelperService } from './interval-helper.service';

describe('IntervalHelperService', () => {
  let service: IntervalHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntervalHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
