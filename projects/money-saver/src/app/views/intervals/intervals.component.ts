import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BreadcrumbItem } from '../../components/breadcrumb/breadcrumb-item';
import { IntervalsService } from '../../services/intervals.service';
import { Interval } from '../../shared';

@Component({
  selector: 'app-intervals',
  templateUrl: './intervals.component.html',
  styleUrls: ['./intervals.component.scss']
})
export class IntervalsComponent implements OnInit {

  year: number;
  breadcrumb: BreadcrumbItem[] = [];
  intervals: Interval[];

  constructor(
    private route: ActivatedRoute,
    private intervalsService: IntervalsService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params) => {
        this.year = parseInt(params.year);
        this.updateBreadcrumb();
        return this.intervalsService.getByYear(this.year);
      })
    ).subscribe((intervals: Interval[]) => {
      this.intervals = intervals;
    });
  }

  updateBreadcrumb() {
    this.breadcrumb = [
      new BreadcrumbItem('Years', '..'),
      this.getCurrentYearSegment()
    ];
  }

  getCurrentYearSegment(): BreadcrumbItem {
    const result = new BreadcrumbItem(this.year.toString());
    result.active = true;
    return result;
  }

}
