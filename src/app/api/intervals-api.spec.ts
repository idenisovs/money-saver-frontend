import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { IntervalsApi } from './intervals-api';

describe('IntervalsApi', () => {
  let service: IntervalsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(IntervalsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
