import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-interval-modal',
  templateUrl: './create-interval-modal.component.html',
  styleUrls: ['./create-interval-modal.component.scss']
})
export class CreateIntervalModalComponent {
  startDate?: Date;
  finishDate?: Date;

  constructor(
    private modal: NgbActiveModal,
    private fb: FormBuilder
  ) {}

  cancel() {
    this.modal.dismiss('cancel');
  }
}
