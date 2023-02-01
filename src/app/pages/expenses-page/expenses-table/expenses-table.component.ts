import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';

import { ExpensesEditModalComponent } from './expenses-edit-modal/expenses-edit-modal.component';
import { Day } from '../../../shared';

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
    const today = this.getDateStr(new Date());
    const expensesDate = this.getDateStr(dailyExpensesOverview.date);

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

    modalRef.componentInstance.day = day;

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

  private getDateStr(date = new Date()): string {
    const result: string[] = [];

    result.push(date.getFullYear().toString());

    let mm = (date.getMonth() + 1);

    if (mm < 10) {
      result.push('0' + mm);
    } else {
      result.push(mm.toString())
    }

    const dd = date.getDate();

    if (dd < 10) {
      result.push('0' + dd);
    } else {
      result.push(dd.toString())
    }

    return result.join('-');
  }
}
