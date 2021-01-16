import { Component, Input, OnInit } from '@angular/core';
import { Interval } from '../../../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interval-item',
  templateUrl: './interval-item.component.html',
  styleUrls: ['./interval-item.component.scss']
})
export class IntervalItemComponent implements OnInit {

  @Input()
  interval: Interval;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  setContextBorder() {
    return 'border-info';
  }

  async openInterval() {
    await this.router.navigate(['intervals', this.interval.id]);
  }

}
