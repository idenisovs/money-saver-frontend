import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from '../../components/breadcrumb/breadcrumb-item';
import { IntervalsService } from '../../services/intervals.service';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.scss']
})
export class YearsComponent implements OnInit {
  breadcrumb: BreadcrumbItem[] = [];
  years: number[];

  constructor(private intervals: IntervalsService) { }

  ngOnInit(): void {
    const breadcrumbItem = new BreadcrumbItem('Years');
    breadcrumbItem.active = true;
    this.breadcrumb = [ breadcrumbItem ];

    this.intervals.getYears().subscribe((response) => {
      this.years = response;
    })
  }
}
