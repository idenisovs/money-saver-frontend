import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SummaryApi } from './summary-api';

describe('SummaryApi', () => {
  let service: SummaryApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(SummaryApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
