import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Interval } from '../../../../shared';
import { FormBuilder, Validators } from '@angular/forms';
import { NumberValidator } from '../../../../validators';

@Component({
  selector: 'app-edit-interval-modal',
  templateUrl: './edit-interval-modal.component.html',
  styleUrls: ['./edit-interval-modal.component.scss']
})
export class EditIntervalModalComponent implements OnInit {

  @Input()
  current: Interval;

  intervalForm = this.fb.group({
    from: [ '', Validators.required ],
    till: [ '', Validators.required ],
    sum: [ '', [ Validators.required, NumberValidator() ] ]
  });

  constructor(
    private modal: NgbActiveModal,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  save() {
    this.modal.close('save');
  }

  cancel() {
    this.modal.dismiss('cancel');
  }

}
