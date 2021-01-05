import { Component, Input, OnInit } from '@angular/core';
import { ScheduleItem } from '../../../shared';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.scss']
})
export class ExpensesTableComponent implements OnInit {

  @Input()
  schedule: ScheduleItem[];

  constructor() { }

  ngOnInit(): void {
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
