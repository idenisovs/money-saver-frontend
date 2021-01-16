import { Component, Input, OnInit } from '@angular/core';
import { Interval } from '../../../shared';

@Component({
  selector: 'app-interval-item',
  templateUrl: './interval-item.component.html',
  styleUrls: ['./interval-item.component.scss']
})
export class IntervalItemComponent implements OnInit {

  @Input()
  interval: Interval;

  constructor() { }

  ngOnInit(): void {
  }

  setContextBorder() {
    if (this.interval.latest) {
      return 'border-primary';
    } else {
      return 'border-info';
    }
  }

}
