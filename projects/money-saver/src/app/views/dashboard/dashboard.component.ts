import { Component, OnInit } from '@angular/core';
import { IntervalsService } from '../../services/intervals.service';
import { Interval, ScheduleItem, Totals } from '../../shared';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  interval: Interval;
  schedule: ScheduleItem[];
  totals: Totals;

  constructor(
    private intervals: IntervalsService
  ) { }

  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.intervals.getLatestSummary().subscribe(({ interval, schedule, totals }) => {
      this.interval = interval;
      this.schedule = schedule;
      this.totals = totals;
    });
  }
}
