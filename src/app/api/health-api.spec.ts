import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HealthApi } from './health-api';

describe('HealthApi', () => {
  let service: HealthApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(HealthApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
