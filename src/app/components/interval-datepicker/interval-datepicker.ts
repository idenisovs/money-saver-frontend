import { ChangeDetectionStrategy, Component, inject, model, signal } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateParserFormatter, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-interval-datepicker',
    imports: [ NgbInputDatepicker ],
    templateUrl: './interval-datepicker.html',
    styleUrl: './interval-datepicker.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntervalDatepicker {
    private readonly calendar = inject(NgbCalendar);
    protected readonly formatter = inject(NgbDateParserFormatter);

    readonly fromDate = model<NgbDate | null>(null);
    readonly toDate = model<NgbDate | null>(null);

    protected readonly hoveredDate = signal<NgbDate | null>(null);

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
    }

    protected validateInput(current: NgbDate | null, input: string): NgbDate | null {
        const parsed = NgbDate.from(this.formatter.parse(input));
        return parsed && this.calendar.isValid(parsed) ? parsed : current;
    }

    protected isRange(date: NgbDate): boolean {
        return date.equals(this.fromDate())
            || date.equals(this.toDate())
            || this.isInside(date)
            || this.isHovered(date);
    }

    protected isHovered(date: NgbDate): boolean {
        const from = this.fromDate();
        const hovered = this.hoveredDate();
        return !!from && !this.toDate() && !!hovered && date.after(from) && date.before(hovered);
    }

    protected isInside(date: NgbDate): boolean {
        const from = this.fromDate();
        const to = this.toDate();
        return !!from && !!to && date.after(from) && date.before(to);
    }
}
