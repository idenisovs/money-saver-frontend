import { Component, Input } from '@angular/core';
import { IntervalHelperService } from '../../expenses-page/interval-control-panel/interval-helper.service';
import { Interval } from '../../../shared';

@Component({
  selector: 'app-interval-card',
  templateUrl: './interval-card.component.html',
  styleUrls: ['./interval-card.component.scss']
})
export class IntervalCardComponent {
  @Input()
  interval!: Interval;

  @Input()
  idx?: number;

  get IID(): number {
    if (this.idx) {
      return this.idx;
    }

    return this.interval.id as number;
  }

  constructor(
    public helper: IntervalHelperService
  ) {}
}
