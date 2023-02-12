import { Component, Input } from '@angular/core';

import { Interval } from '../../../shared';

@Component({
  selector: 'app-interval-control-panel',
  templateUrl: './interval-control-panel.component.html',
  styleUrls: ['./interval-control-panel.component.scss']
})
export class IntervalControlPanelComponent {
  @Input()
  interval = new Interval();
}
