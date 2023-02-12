import { Component, OnInit } from '@angular/core';

import { Summary } from '../../shared';
import { SummaryService } from '../../services/summary.service';
import { LoadingPopupService } from '../../components/loading-popup/loading-popup.service';

@Component({
  selector: 'app-expenses-page',
  templateUrl: './expenses-page.component.html',
  styleUrls: ['./expenses-page.component.scss']
})
export class ExpensesPageComponent implements OnInit {
  public summary: Summary|null = null;
  public isSummaryLoading = false;
  public intervalYear?: number;

  constructor(
    private summaryService: SummaryService,
    private loadingPopup: LoadingPopupService
  ) {}
  ngOnInit() {
    this.requestExpensesSummary();
  }

  requestExpensesSummary() {
    this.isSummaryLoading = true;

    this.loadingPopup.open({
      delay: 1000,
      message: 'Requesting summary...'
    });

    this.summaryService.get().subscribe((summary: Summary|null) => {
      this.loadingPopup.close();
      this.isSummaryLoading = false;
      this.summary = summary;
      this.intervalYear = summary?.interval.start.getFullYear();
    });
  }
}
