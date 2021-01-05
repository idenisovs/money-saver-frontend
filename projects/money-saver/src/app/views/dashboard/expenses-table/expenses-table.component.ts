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

}
