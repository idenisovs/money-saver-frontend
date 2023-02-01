import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-expenses-edit-modal',
  templateUrl: './expenses-edit-modal.component.html',
  styleUrls: ['./expenses-edit-modal.component.scss']
})
export class ExpensesEditModalComponent {
  constructor(public modal: NgbActiveModal) {}
}
