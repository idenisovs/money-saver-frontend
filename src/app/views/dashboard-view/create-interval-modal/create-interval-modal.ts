import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { form, FormField, min, required } from '@angular/forms/signals';
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
import { getDateStr } from '@shared/utils';
import { IntervalsApi } from '@api/intervals-api';
import { FormsModule } from '@angular/forms';

type CreateIntervalModel = {
    start: string;
    end: string;
    sum: number;
};

@Component({
    selector: 'app-create-interval-modal',
    imports: [ FormField, NgbInputDatepicker, FormsModule ],
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

    protected readonly fromDate = signal<NgbDate | null>(this.calendar.getToday());
    protected readonly toDate = signal<NgbDate | null>(null);
    protected readonly hoveredDate = signal<NgbDate | null>(null);

    protected readonly isLoading = signal(false);
    protected readonly error = signal<string | null>(null);

    protected onDateSelection(date: NgbDate): void {
        const from = this.fromDate();

        if (!from || this.toDate()) {
            this.fromDate.set(date);
            this.toDate.set(null);
        } else if (date.after(from)) {
            this.toDate.set(date);
        } else {
            this.fromDate.set(date);
            this.toDate.set(null);
        }

        this.syncForm();
    }

    protected onFromInput(input: string): void {
        this.fromDate.set(this.validateInput(this.fromDate(), input));
        this.syncForm();
    }

    protected onToInput(input: string): void {
        this.toDate.set(this.validateInput(this.toDate(), input));
        this.syncForm();
    }

    private validateInput(current: NgbDate | null, input: string): NgbDate | null {
        const parsed = NgbDate.from(this.formatter.parse(input));
        return parsed && this.calendar.isValid(parsed) ? parsed : current;
    }

    protected isHovered(date: NgbDate): boolean {
        const from = this.fromDate();
        const hovered = this.hoveredDate();
        return !!from && !this.toDate() && !!hovered && date.after(from) && date.before(hovered);
    }

    protected isInside(date: NgbDate): boolean {
        const from = this.fromDate();
        const to = this.toDate();
        return !!to && !!from && date.after(from) && date.before(to);
    }

    protected isRange(date: NgbDate): boolean {
        return date.equals(this.fromDate())
            || date.equals(this.toDate())
            || this.isInside(date)
            || this.isHovered(date);
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

    private syncForm(): void {
        const from = this.fromDate();
        const to = this.toDate() ?? from;

        this.intervalForm.start().value.set(from ? this.toDateStr(from) : '');
        this.intervalForm.end().value.set(to ? this.toDateStr(to) : '');
    }

    private toDateStr(date: NgbDate): string {
        return getDateStr(new Date(date.year, date.month - 1, date.day));
    }
}
