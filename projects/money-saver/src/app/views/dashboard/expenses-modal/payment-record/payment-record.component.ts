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
			this.mode = ItemMode.Edit;
		}
	}

	handleControlsAction(action: ControlsAction) {
		switch (action) {
			case ControlsAction.EditMode:
				return this.editModeAction();
			case ControlsAction.Save:
				return this.saveAction();
			case ControlsAction.Delete:
				return this.deleteAction();
			default:
				this.cancelAction();
		}
	}

	editModeAction() {
		this.value = this.payment.sum;
		this.mode = ItemMode.Edit;
	}

	saveAction() {
		this.mode = ItemMode.View;
		this.payment.update = !this.payment.add;
	}

	deleteAction() {
		this.payment.remove = true;
		this.mode = ItemMode.Delete;
		this.clean.emit();
	}

	cancelAction() {
		if (this.mode === ItemMode.Edit) {
			this.payment.sum = this.value;
		}

		if (this.mode === ItemMode.Delete) {
			this.payment.remove = false;
		}

		this.mode = ItemMode.View;
	}
}
