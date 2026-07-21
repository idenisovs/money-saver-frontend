import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbActiveModal, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { catchError, EMPTY, finalize } from 'rxjs';

import { Interval } from '@shared';
import { IntervalsApi } from '@api/intervals-api';

type CreateIntervalForm = FormGroup<{
    start: FormControl<string>;
    end: FormControl<string>;
    sum: FormControl<number>;
}>;

@Component({
    selector: 'app-create-interval-modal',
    imports: [ ReactiveFormsModule, NgbInputDatepicker ],
    templateUrl: './create-interval-modal.html',
    styleUrl: './create-interval-modal.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateIntervalModal {
    private readonly fb = inject(FormBuilder);
    private readonly intervalsApi = inject(IntervalsApi);
    protected readonly activeModal = inject(NgbActiveModal);

    private readonly defaults = new Interval();

    protected readonly intervalForm: CreateIntervalForm = this.fb.nonNullable.group({
        start: [ this.defaults.start, Validators.required ],
        end: [ this.defaults.end, Validators.required ],
        sum: [ this.defaults.sum, [ Validators.required, Validators.min(0.01) ] ],
    });

    protected readonly isLoading = signal(false);
    protected readonly error = signal<string | null>(null);

    protected create(): void {
        if (this.intervalForm.invalid || this.isLoading()) {
            return;
        }

        this.isLoading.set(true);
        this.error.set(null);

        const interval = new Interval(this.intervalForm.getRawValue());

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
}
