import { Component, Input } from '@angular/core';

import { Totals } from '../../../shared';

@Component({
  selector: 'app-interval-summary-panel',
  templateUrl: './interval-summary-panel.component.html',
  styleUrls: ['./interval-summary-panel.component.scss']
})
export class IntervalSummaryPanelComponent {
  @Input()
  totals?: Totals;
}
