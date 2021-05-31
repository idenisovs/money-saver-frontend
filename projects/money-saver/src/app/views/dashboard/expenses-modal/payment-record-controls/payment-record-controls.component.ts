import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemMode } from '../item-mode';
import { ControlsAction } from '../controls-action';

@Component({
	selector: 'app-payment-record-controls',
	templateUrl: './payment-record-controls.component.html',
	styleUrls: ['./payment-record-controls.component.scss']
})
export class PaymentRecordControlsComponent implements OnInit {
	Action = ControlsAction
	ItemMode = ItemMode;

	@Input()
	mode = ItemMode.View;

	@Output()
	action = new EventEmitter<ControlsAction>();

	constructor() {
	}

	ngOnInit(): void {
	}

}
