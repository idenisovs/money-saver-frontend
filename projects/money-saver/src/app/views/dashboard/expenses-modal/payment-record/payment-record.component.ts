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
	value = 0;

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
			this.value = this.payment.sum;
			this.mode = ItemMode.Edit;
		}
	}

	handleControlsAction(action: ControlsAction) {
		switch (action) {
			case ControlsAction.EditMode:
				this.value = this.payment.sum;
				this.mode = ItemMode.Edit;
				break;
			case ControlsAction.DeleteMode:
				this.mode = ItemMode.Delete;
				break;
			case ControlsAction.Save:
				this.payment.sum = this.value;
				this.payment.update = !this.payment.add;

				this.value = 0;
				this.mode = ItemMode.View;
				break;
			case ControlsAction.Delete:
				this.payment.remove = true;
				this.mode = ItemMode.View;
				this.clean.emit();
				break;
			default:
				this.value = 0;
				this.mode = ItemMode.View;
				break;
		}
	}
}
