import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScheduleItem } from '../../../shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExpensesModalComponent } from '../expenses-modal/expenses-modal.component';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.scss']
})
export class ExpensesTableComponent implements OnInit {

  @Input()
  schedule: ScheduleItem[];

  @Output()
  changes = new EventEmitter<void>();

  constructor(
    private modal: NgbModal
  ) { }

  ngOnInit(): void {}

  async openExpensesModal(expensesRecord: ScheduleItem) {
    const modal = this.modal.open(ExpensesModalComponent);

    (modal.componentInstance as ExpensesModalComponent).record = expensesRecord;

    try {
      await modal.result;

      this.changes.emit();
    } catch (reason) {
      // On cancel or just close.
    }
  }

  highlightDate(expensesRecord: ScheduleItem) {
    const result = [];

    const compare = this.compareDates(expensesRecord.date, new Date());

    if (compare === -1) {
      result.push('table-success');
    } else if (compare === 1) {
      result.push('table-primary');
    } else {
      result.push('table-info');
    }

    return result;
  }

  compareDates(a: Date, b: Date): number {
    const daysA = Math.floor(a.getTime() / 1000 / 60/ 60 / 24);
    const daysB = Math.floor(b.getTime() / 1000 / 60/ 60 / 24);

    if (daysA < daysB) {
      return -1;
    }

    if (daysA > daysB) {
      return 1;
    }

    return 0;
  }
}
