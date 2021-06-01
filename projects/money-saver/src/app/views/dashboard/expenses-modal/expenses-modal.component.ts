import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Payment, ScheduleItem } from '../../../shared';
import { PaymentsService } from '../../../services/payments.service';

@Component({
	selector: 'app-expenses-modal',
	templateUrl: './expenses-modal.component.html',
	styleUrls: ['./expenses-modal.component.scss']
})
export class ExpensesModalComponent implements OnInit {
	@Input()
	record: ScheduleItem;

	payments: Payment[] = [];

	constructor(
		private modal: NgbActiveModal,
		private paymentsService: PaymentsService
	) {
	}

	ngOnInit(): void {
		this.paymentsService.getByDate(this.record.date).subscribe((response) => {
			this.payments = response;
		});
	}

	clean() {
		for (let idx = 0; idx < this.payments.length; idx++) {
			const payment = this.payments[idx];

			if (payment.add && payment.remove) {
				this.payments.splice(idx, 1);
				idx--;
			}
		}
	}

	add() {
		const payment = new Payment();

		payment.add = true;

		this.payments.push(payment);
	}

	save() {
		this.paymentsService.update(this.payments).subscribe(() => {
			this.modal.close('save');
		});
	}

	cancel() {
		this.modal.dismiss('cancel')
	}
}
