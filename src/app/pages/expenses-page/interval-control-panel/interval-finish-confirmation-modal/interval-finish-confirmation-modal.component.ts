import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Interval } from '../../../../shared';

@Component({
  selector: 'app-interval-finish-confirmation-modal',
  templateUrl: './interval-finish-confirmation-modal.component.html',
  styleUrls: ['./interval-finish-confirmation-modal.component.scss']
})
export class IntervalFinishConfirmationModalComponent {
  @Input()
  interval = new Interval();

  constructor(public modal: NgbActiveModal) {}
}
