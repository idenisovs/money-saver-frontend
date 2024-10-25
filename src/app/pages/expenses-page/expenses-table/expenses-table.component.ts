import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { DateTime } from 'luxon';

import { ExpensesEditModalComponent } from './expenses-edit-modal/expenses-edit-modal.component';
import { DailyExpensesOverview } from '../../../shared';
import { getDateStr } from '../../../shared/utils';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.scss']
})
export class ExpensesTableComponent {
  @Input()
  expenses: DailyExpensesOverview[] = [];

  @Output()
  changes = new EventEmitter<void>();

  constructor(private modal: NgbModal) {
  }

  public getRowStyle(dailyExpensesOverview: DailyExpensesOverview) {
    const today = getDateStr(new Date());
    const expensesDate = dailyExpensesOverview.date;

    if (expensesDate === today) {
      return 'table-info';
    }

    if (this.isWeekend(dailyExpensesOverview.date)) {
      return 'table-primary';
    }

    if (expensesDate < today) {
      return 'table-success';
    }

    return 'table-light';
  }

  public async openExpensesModal(day: DailyExpensesOverview) {
    const modalRef = this.modal.open(ExpensesEditModalComponent, {
      centered: true
    });

    modalRef.componentInstance.dailyExpensesOverview = day;

    const result = await this.modalResult(modalRef);

    if (result) {
      this.changes.emit();
    }
  }

  private async modalResult(modalRef: NgbModalRef): Promise<any> {
    try {
      return await modalRef.result;
    } catch (e) {
      return e;
    }
  }

  private isWeekend(date: string): boolean {
    return DateTime.fromISO(date).isWeekend;
  }
}
