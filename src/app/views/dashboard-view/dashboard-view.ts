import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { SummaryApi } from '@api/summary-api';
import { Navbar } from '@components/navbar/navbar';

@Component({
  selector: 'app-dashboard-view',
  imports: [Navbar],
  templateUrl: './dashboard-view.html',
  styleUrl: './dashboard-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardView {
  private readonly summaryApi = inject(SummaryApi);

  protected readonly summary = toSignal(this.summaryApi.getExpensesSummary());
}
