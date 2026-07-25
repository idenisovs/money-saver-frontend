import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { form, FormField, min, required } from '@angular/forms/signals';
import { CurrencyPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbActiveModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { catchError, EMPTY, finalize } from 'rxjs';

import { Interval } from '@shared';
import { daysDiff, getDateStr } from '@shared/utils';
import { IntervalsApi } from '@api/intervals-api';
import { IntervalDatepicker } from '@components/interval-datepicker/interval-datepicker';
import { FormsModule } from '@angular/forms';

type CreateIntervalModel = {
    start: string;
    end: string;
    sum: number;
};

@Component({
    selector: 'app-create-interval-modal',
    imports: [ FormField, CurrencyPipe, IntervalDatepicker, FormsModule ],
    templateUrl: './create-interval-modal.html',
    styleUrl: './create-interval-modal.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateIntervalModal {
    private readonly intervalsApi = inject(IntervalsApi);
    protected readonly activeModal = inject(NgbActiveModal);

    private readonly defaults = new Interval();

    private readonly model = signal<CreateIntervalModel>({
        start: this.defaults.start,
        end: this.defaults.end,
        sum: this.defaults.sum,
    });

    protected readonly intervalForm = form(this.model, (path) => {
        required(path.start);
        required(path.end);
        required(path.sum);
        min(path.sum, 0.01);
    });

    protected readonly fromDate = signal<NgbDate | null>(null);
    protected readonly toDate = signal<NgbDate | null>(null);

    protected readonly isLoading = signal(false);
    protected readonly error = signal<string | null>(null);

    /**
     * Inclusive number of days the selected interval spans, or `null` when the
     * range is incomplete (start and/or end date missing).
     */
    protected readonly selectedDays = computed<number | null>(() => {
        const from = this.fromDate();
        const to = this.toDate();

        if (!from || !to) {
            return null;
        }

        const days = daysDiff(this.toDateStr(from), this.toDateStr(to)) + 1;

        return days >= 1 ? days : null;
    });

    /**
     * How much money is available per day (sum divided by the interval length),
     * or `null` when the sum or the interval is missing.
     */
    protected readonly perDay = computed<number | null>(() => {
        const days = this.selectedDays();
        const sum = this.intervalForm.sum().value();

        if (!days || !sum) {
            return null;
        }

        return sum / days;
    });

    /**
     * Keeps the signal form's `start`/`end` fields in sync with the datepicker
     * selection, whichever way the dates change (calendar click or typing).
     */
    private readonly syncForm = effect(() => {
        const from = this.fromDate();
        const to = this.toDate() ?? from;

        this.intervalForm.start().value.set(from ? this.toDateStr(from) : '');
        this.intervalForm.end().value.set(to ? this.toDateStr(to) : '');
    });

    protected create(): void {
        if (this.intervalForm().invalid() || this.isLoading()) {
            return;
        }

        this.isLoading.set(true);
        this.error.set(null);

        const interval = new Interval(this.intervalForm().value());

        this.intervalsApi.create(interval).pipe(
            catchError((err: HttpErrorResponse) => {
                if (err.status === 417 && err.error?.message) {
                    this.error.set(err.error.message);
                } else {
                    this.error.set('Something bad happened. Please try again.');
                }
                return EMPTY;
            }),
            finalize(() => this.isLoading.set(false)),
        ).subscribe((created) => {
            this.activeModal.close(created);
        });
    }

    private toDateStr(date: NgbDate): string {
        return getDateStr(new Date(date.year, date.month - 1, date.day));
    }
}
