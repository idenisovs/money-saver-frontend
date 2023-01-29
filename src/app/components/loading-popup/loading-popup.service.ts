import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoadingPopupComponent } from './loading-popup.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingPopupService {
  private modalRef?: NgbModalRef;
  constructor(private modal: NgbModal) { }

  open() {
    this.modalRef = this.modal.open(LoadingPopupComponent);
  }

  close() {
    if (!this.modalRef) {
      return;
    }

    this.modalRef.close();
  }
}
