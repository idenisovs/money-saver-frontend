import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Payment } from '../../../../shared';
import { ItemMode } from '../item-mode';
import { ControlsAction } from '../controls-action';

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
	clean = new EventEmitter<void>()

	get ContextClasses() {
		return {
			'strike-payment': this.payment.remove
		};
	}

	get DisplayEditIcon(): boolean {
		return this.mode === ItemMode.View && (this.payment.add || this.payment.update || this.payment.remove);
	}

	constructor() {}

	ngOnInit(): void {
		if (this.payment.add) {
			this.editable = this.payment;
			this.mode = ItemMode.Edit;
		}
	}

	handleControlsAction(action: ControlsAction) {
		switch (action) {
			case ControlsAction.EditMode:
				console.log('EDIT MODE');
				break;
			case ControlsAction.DeleteMode:
				console.log('DELETE MODE');
				break;
			case ControlsAction.Save:
				this.payment.sum = this.editable.sum;
				this.payment.update = true;
				this.mode = ItemMode.View;
				break;
			case ControlsAction.Delete:
				console.log('DELETE');
				break;
			default:
				this.cancelEdit();
				break;
		}
	}

	cancelEdit() {
		console.log('CANCEL');
		this.mode = ItemMode.View;

		if (this.payment.add) {
			this.payment.remove = true;
			this.clean.emit();
		}
	}
}
