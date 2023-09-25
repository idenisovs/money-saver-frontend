import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../components/breadcrumb/breadcrumb.service';
import { BreadcrumbItem } from '../../components/breadcrumb/BreadcrumbItem';
import { ActivatedRoute } from '@angular/router';
import { IntervalsService } from '../../services/intervals.service';
import { Interval } from '../../shared';
import { IntervalHelperService } from '../expenses-page/interval-control-panel/interval-helper.service';

@Component({
  selector: 'app-intervals-page',
  templateUrl: './intervals-page.component.html',
  styleUrls: ['./intervals-page.component.scss']
})
export class IntervalsPageComponent implements OnInit {
  year?: string;
  intervals: Interval[] = [];
  isRequestRunning = false;

  constructor(
    public breadcrumb: BreadcrumbService,
    public route: ActivatedRoute,
    public intervalsService: IntervalsService,
    public helper: IntervalHelperService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.year = params['year'];
      this.setupBreadcrumbs();
      this.requestYears();
    });
  }

  setupBreadcrumbs() {
    if (!this.year) {
      return;
    }

    this.breadcrumb.nodes = [
      new BreadcrumbItem('All', '/years')
    ];

    const yearBreadcrumbNode = new BreadcrumbItem(this.year);
    yearBreadcrumbNode.active = true;
    this.breadcrumb.nodes.push(yearBreadcrumbNode);
  }

  requestYears() {
    if (!this.year) {
      return;
    }

    this.isRequestRunning = true;
    this.intervalsService.getByYear(this.year).subscribe((response) => {
      this.intervals = response;
      this.isRequestRunning = false;
    })
  }
}
