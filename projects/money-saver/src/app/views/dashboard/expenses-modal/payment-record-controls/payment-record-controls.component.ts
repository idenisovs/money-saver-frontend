import { Component, Input, OnInit } from '@angular/core';
import { ItemMode } from '../item-mode';

@Component({
  selector: 'app-payment-record-controls',
  templateUrl: './payment-record-controls.component.html',
  styleUrls: ['./payment-record-controls.component.scss']
})
export class PaymentRecordControlsComponent implements OnInit {

  ItemMode = ItemMode;

  @Input()
  mode = ItemMode.View;

  constructor() { }

  ngOnInit(): void {
  }

}
