import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { switchMap } from 'rxjs';

import { Interval, Summary } from '../../shared';
import { SummaryService } from '../../services/summary.service';
import { LoadingPopupService } from '../../components/loading-popup/loading-popup.service';
import { BreadcrumbService } from '../../components/breadcrumb/breadcrumb.service';
import { BreadcrumbItem } from '../../components/breadcrumb/BreadcrumbItem';
import { IntervalModalComponent } from '../../components/interval-modal/interval-modal.component'

@Component({
  selector: 'app-expenses-page',
  templateUrl: './expenses-page.component.html',
  styleUrls: ['./expenses-page.component.scss'],
  providers: [ DatePipe ]
})
export class ExpensesPageComponent implements OnInit {
  public summary: Summary|null = null;
  public isSummaryLoading = false;

  constructor(
    private datePipe: DatePipe,
    private summaryService: SummaryService,
    private loadingPopup: LoadingPopupService,
    private breadcrumb: BreadcrumbService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.setupBreadcrumb();
    this.requestExpensesSummary();
  }

  setupBreadcrumb() {
    this.breadcrumb.nodes = [
      new BreadcrumbItem('All', '/years')
    ];
  }

  requestExpensesSummary() {
    this.isSummaryLoading = true;

    this.loadingPopup.open({
      delay: 1000,
      message: 'Requesting summary...'
    });

    this.route.params.pipe(
      switchMap((params) => {
        const intervalId = params['interval_id'];

        return this.summaryService.get(intervalId)
      })
    ).subscribe((summary: Summary|null) => {
      this.loadingPopup.close();
      this.isSummaryLoading = false;
      this.summary = summary;

      if (this.breadcrumb.nodes.length < 2) {
        this.setBreadcrumbNodes();
      }
    })
  }

  setBreadcrumbNodes() {
    const interval = this.summary?.interval;

    if (interval) {
      this.addYearBreadcrumbNode(interval);
      this.addIntervalBreadcrumbNode(interval);
    }
  }

  addYearBreadcrumbNode(interval: Interval) {
    const year = interval.start.getFullYear();
    const yearNode = new BreadcrumbItem(year.toString(), `/years/${year}`);
    this.breadcrumb.nodes.push(yearNode);
  }

  addIntervalBreadcrumbNode(interval: Interval) {
    const intervalStart = this.datePipe.transform(interval.start, 'MMM dd');
    const intervalEnd = this.datePipe.transform(interval.end, 'MMM dd');
    const intervalNode = new BreadcrumbItem(`${intervalStart} - ${intervalEnd}`);
    intervalNode.active = true;
    this.breadcrumb.nodes.push(intervalNode);
  }

  async openIntervalModal() {
    const intervalModalRef = this.modalService.open(IntervalModalComponent, {
      centered: true
    });

    try {
      const result = await intervalModalRef.result as Interval|null;

      if (result) {
        await this.router.navigate(['expenses', result.id])
      }
    } catch (e) {
      console.log(e);
    }
  }
}
