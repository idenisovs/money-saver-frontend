import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Interval } from '../../../shared';

@Component({
  selector: 'app-interval-control-panel',
  templateUrl: './interval-control-panel.component.html',
  styleUrls: ['./interval-control-panel.component.scss']
})
export class IntervalControlPanelComponent implements OnChanges {
  isIntervalFinished = false;

  @Input()
  interval = new Interval();

  ngOnChanges(changes: SimpleChanges) {
    const today = new Date();
    const interval = changes['interval'].currentValue as Interval;

    this.isIntervalFinished = interval.end <= today;
  }
}
