import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaymentsService } from '../../../services/payments.service';
import { Payment } from '../../../shared';

@Component({
  selector: 'app-dashboard-controls',
  templateUrl: './dashboard-controls.component.html',
  styleUrls: ['./dashboard-controls.component.scss']
})
export class DashboardControlsComponent implements OnInit {
  @Output()
  changes = new EventEmitter<void>();

  showPaymentInputs = false;

  constructor(
    private payments: PaymentsService
  ) { }

  ngOnInit(): void {
  }

  savePayment(value: any) {
    if (!value) {
      this.showPaymentInputs = false;
      return;
    }

    this.payments.save([ new Payment(value.payment) ]).subscribe(() => {
      this.showPaymentInputs = false;
      this.changes.emit();
    });
  }
}
