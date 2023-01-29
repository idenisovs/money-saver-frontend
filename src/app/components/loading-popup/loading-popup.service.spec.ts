import { TestBed } from '@angular/core/testing';

import { LoadingPopupService } from './loading-popup.service';

describe('LoadingPopupService', () => {
  let service: LoadingPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
