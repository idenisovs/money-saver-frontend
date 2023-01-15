import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input()
  delay = 0;

  isVisible = false;

  ngOnInit() {
    this.isVisible = this.delay === 0;

    if (this.delay) {
      setTimeout(() => {
        this.isVisible = true;
      }, this.delay);
    }
  }
}
