import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IntervalsService } from '../../services/intervals.service';
import { BreadcrumbItem } from '../../components/breadcrumb/breadcrumb-item';
import { SummaryService } from '../../services/summary.service';
import { Interval, Summary, Totals, Day } from '../../shared';


@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	providers: [DatePipe]
})
export class DashboardComponent implements OnInit {
	intervalId: number;
	interval: Interval;
	schedule: Day[];
	totals: Totals;

	breadcrumb: BreadcrumbItem[] = [];
	requestRunning = true;

	constructor(
		private intervals: IntervalsService,
		private summaryService: SummaryService,
		private datePipe: DatePipe,
		private route: ActivatedRoute
	) {
	}

	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			if ('intervalId' in params) {
				this.intervalId = params.intervalId;
			}

			this.reload();
		})
	}

	reload() {
		this.summaryService.getExpensesSummary(this.intervalId).subscribe((summary: Summary) => {
			if (summary) {
				this.interval = summary.interval;
				this.schedule = summary.days;
				this.totals = summary.totals;

				this.updateBreadcrumb();
			}

			this.requestRunning = false;
		});
	}

	updateBreadcrumb() {
		const year = this.interval.start.getFullYear();

		const start = this.datePipe.transform(this.interval.start, 'MMM d', '+0000');
		const end = this.datePipe.transform(this.interval.end, 'MMM d', '+0000');

		const current = new BreadcrumbItem(`${start} - ${end}`);

		current.active = true;

		this.breadcrumb = [
			new BreadcrumbItem('Years', '/years'),
			new BreadcrumbItem(year.toString(), `/years/${year}`),
			current
		];
	}
}
