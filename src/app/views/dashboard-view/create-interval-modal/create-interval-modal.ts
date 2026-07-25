import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { form, FormField, min, required } from '@angular/forms/signals';
import { CurrencyPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
    NgbActiveModal,
    NgbCalendar,
    NgbDate,
    NgbDateParserFormatter,
    NgbInputDatepicker,
} from '@ng-bootstrap/ng-bootstrap';
import { catchError, EMPTY, finalize } from 'rxjs';

import { Interval } from '@shared';
import { daysDiff, getDateStr } from '@shared/utils';
import { IntervalsApi } from '@api/intervals-api';
import { FormsModule } from '@angular/forms';

type CreateIntervalModel = {
    start: string;
    end: string;
    sum: number;
};

@Component({
    selector: 'app-create-interval-modal',
    imports: [ FormField, NgbInputDatepicker, FormsModule, CurrencyPipe ],
    templateUrl: './create-interval-modal.html',
    styleUrl: './create-interval-modal.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateIntervalModal {
    private readonly intervalsApi = inject(IntervalsApi);
    private readonly calendar = inject(NgbCalendar);
    protected readonly formatter = inject(NgbDateParserFormatter);
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
    protected readonly hoveredDate = signal<NgbDate | null>(null);

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

    onDateSelection(date: NgbDate) {
        if (!this.fromDate() && !this.toDate()) {
            this.fromDate.set(date);
        } else if (this.fromDate() && !this.toDate() && date && date.after(this.fromDate())) {
            this.toDate.set(date);
        } else {
            this.toDate.set(null);
            this.fromDate.set(date);
        }
    }

    isRange(date: NgbDate) {
        return (
            date.equals(this.fromDate()) ||
            (this.toDate && date.equals(this.toDate())) ||
            this.isInside(date) ||
            this.isHovered(date)
        );
    }

    isHovered(date: NgbDate) {
        return (
            this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate()) && date.before(this.hoveredDate())
        );
    }

    isInside(date: NgbDate) {
        return this.toDate && date.after(this.fromDate()) && date.before(this.toDate());
    }

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

    validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
        const parsed = this.formatter.parse(input);

        if (parsed && this.calendar.isValid(NgbDate.from(parsed))) {
            return NgbDate.from(parsed);
        } else {
            return currentValue;
        }
    }

    private toDateStr(date: NgbDate): string {
        return getDateStr(new Date(date.year, date.month - 1, date.day));
    }
}
