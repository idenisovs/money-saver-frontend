import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Payment } from '../../../../shared';

enum ItemMode {
  View,
  Edit,
  Delete
}

@Component({
  selector: 'app-payment-record',
  templateUrl: './payment-record.component.html',
  styleUrls: ['./payment-record.component.scss']
})
export class PaymentRecordComponent implements OnInit {
  ItemMode = ItemMode;

  mode = ItemMode.View;

  editable: Payment;

  @Input()
  payment: Payment;

  @Output()
  edit = new EventEmitter<void>()

  get ContextClasses() {
    return {
      'text-info': this.payment.add,
      'text-warning': this.payment.update,
      'text-danger strike-payment': this.payment.remove
    };
  }

  constructor() { }

  ngOnInit(): void {
    if (this.payment.add) {
      this.mode = ItemMode.Edit;
    }
  }
}
