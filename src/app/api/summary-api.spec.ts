import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Summary } from '@shared';
import { SummaryApi } from './summary-api';

describe('SummaryApi', () => {
    let service: SummaryApi;
    let httpTesting: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideHttpClient(), provideHttpClientTesting()],
        });
        service = TestBed.inject(SummaryApi);
        httpTesting = TestBed.inject(HttpTestingController);
    });

    afterEach(() => httpTesting.verify());

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('requests the latest expenses summary', () => {
        const summary = new Summary();
        let response: Summary | null | undefined;

        service.getExpensesSummary().subscribe((value) => response = value);

        const request = httpTesting.expectOne('/api/summary/expenses');
        expect(request.request.method).toBe('GET');
        request.flush(summary);

        expect(response).toEqual(summary);
    });

    it('requests an expenses summary by interval ID', () => {
        service.getExpensesSummary(42).subscribe();

        const request = httpTesting.expectOne('/api/summary/expenses/42');
        expect(request.request.method).toBe('GET');
        request.flush(new Summary());
    });

    it('returns null when no interval exists', () => {
        let response: Summary | null | undefined;

        service.getExpensesSummary().subscribe((value) => response = value);

        const request = httpTesting.expectOne('/api/summary/expenses');
        request.flush(null);

        expect(response).toBeNull();
    });
});
