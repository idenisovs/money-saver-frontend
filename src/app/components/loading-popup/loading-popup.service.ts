import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { LoadingPopupComponent } from './loading-popup.component';
import LoadingPopupProperties from './LoadingPopupParams';

@Injectable({
  providedIn: 'root'
})
export class LoadingPopupService {
  private modalRef?: NgbModalRef;
  private timeoutRef?: NodeJS.Timeout;
  private readonly defaultProperties: LoadingPopupProperties = {
    delay: 1000
  };
  constructor(private modal: NgbModal) { }

  public open(properties: LoadingPopupProperties = {}) {
    const fullProps = { ...this.defaultProperties, ...properties };

    this.timeoutRef = setTimeout(() => {
      this.showPopup(fullProps);
    }, fullProps.delay);
  }

  public close() {
    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef);
    }

    if (this.modalRef) {
      this.modalRef.close();
    }
  }

  private showPopup(properties: LoadingPopupProperties) {
    this.modalRef = this.modal.open(LoadingPopupComponent, {
      centered: true,
      backdrop: 'static'
    });

    if (properties.message) {
      this.modalRef.componentInstance.message = properties.message;
    }
  }
}
