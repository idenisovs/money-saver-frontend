import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  visible = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.visible = true;
    }, 1000);
  }

}
