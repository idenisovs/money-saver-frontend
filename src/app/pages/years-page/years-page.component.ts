import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../components/breadcrumb/breadcrumb.service';
import { BreadcrumbItem } from '../../components/breadcrumb/BreadcrumbItem';
import { IntervalsService } from '../../services/intervals.service';

@Component({
  selector: 'app-years-page',
  templateUrl: './years-page.component.html',
  styleUrls: ['./years-page.component.scss']
})
export class YearsPageComponent implements OnInit {

  isRequestRunning = false;
  years: number[] = [];

  constructor(
    private breadcrumb: BreadcrumbService,
    private intervals: IntervalsService
  ) {}

  ngOnInit() {
    this.setupBreadcrumb();
    this.requestAccountableYears();
  }

  setupBreadcrumb() {
    const yearsBreadcrumbNode = new BreadcrumbItem('All');
    yearsBreadcrumbNode.active = true;
    this.breadcrumb.nodes = [ yearsBreadcrumbNode ];
  }

  requestAccountableYears() {
    this.isRequestRunning = true;

    this.intervals.getAccountableYears().subscribe((response) => {
      this.years = response;
      this.isRequestRunning = false;
    });
  }
}
