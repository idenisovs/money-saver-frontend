import { Component, Input, OnInit } from '@angular/core';
import { Totals } from '../../../shared';

@Component({
  selector: 'app-interval-overview',
  templateUrl: './interval-overview.component.html',
  styleUrls: ['./interval-overview.component.scss']
})
export class IntervalOverviewComponent implements OnInit {

  @Input()
  totals: Totals;

  constructor() { }

  ngOnInit(): void {
  }

}
