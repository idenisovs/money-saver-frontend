import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NumberValidator } from '../../../../validators';

@Component({
  selector: 'app-payment-input',
  templateUrl: './payment-input.component.html',
  styleUrls: ['./payment-input.component.scss']
})
export class PaymentInputComponent implements OnInit {

  @Output()
  changes = new EventEmitter<{ value: number }|null>();

  paymentForm = this.fb.group({
    payment: ['', [ Validators.required, Validators.min(0.01), NumberValidator() ]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  save() {
    this.changes.emit(this.paymentForm.value);
  }

  cancel() {
    this.changes.emit(null);
  }
}
