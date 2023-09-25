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

  constructor(
    public helper: IntervalHelperService
  ) {}
}
