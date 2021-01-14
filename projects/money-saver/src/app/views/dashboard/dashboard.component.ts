import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IntervalsService } from '../../services/intervals.service';
import { Interval, Payment, ScheduleItem, Totals } from '../../shared';
import { BreadcrumbItem } from '../../components/breadcrumb/breadcrumb-item';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {

  interval: Interval;
  schedule: ScheduleItem[];
  totals: Totals;

  breadcrumb: BreadcrumbItem[] = [];

  constructor(
    private intervals: IntervalsService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.intervals.getLatestSummary().subscribe(({ interval, schedule, totals }) => {
      this.interval = interval;
      this.schedule = schedule;
      this.totals = totals;
      this.updateBreadcrumb();
    });
  }

  updateBreadcrumb() {
    const year = this.interval.start.getFullYear();

    const start = this.datePipe.transform(this.interval.start);
    const end = this.datePipe.transform(this.interval.end);

    const current = new BreadcrumbItem(`${start} - ${end}`);

    current.active = true;

    this.breadcrumb = [
      new BreadcrumbItem('Years', 'years'),
      new BreadcrumbItem(year.toString(), `years/${year}`),
      current
    ];
  }
}
