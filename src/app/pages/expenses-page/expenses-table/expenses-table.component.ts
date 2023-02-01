import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';

import { ExpensesEditModalComponent } from './expenses-edit-modal/expenses-edit-modal.component';
import { Day } from '../../../shared';
import { getDateStr } from '../../../shared/utils';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.scss']
})
export class ExpensesTableComponent {
  @Input()
  expenses: Day[] = [];

  constructor(private modal: NgbModal) {
  }

  public getRowStyle(dailyExpensesOverview: Day) {
    const today = getDateStr(new Date());
    const expensesDate = getDateStr(dailyExpensesOverview.date);

    if (expensesDate < today) {
      return 'table-success';
    }

    if (expensesDate === today) {
      return 'table-info';
    }

    return 'table-light';
  }

  public async openExpensesModal(day: Day) {
    const modalRef = this.modal.open(ExpensesEditModalComponent, {
      centered: true
    });

    modalRef.componentInstance.dailyExpensesOverview = day;

    const result = await this.modalResult(modalRef);

    console.log(result);
  }

  private async modalResult(modalRef: NgbModalRef): Promise<any> {
    try {
      return await modalRef.result;
    } catch (e) {
      return e;
    }
  }
}
