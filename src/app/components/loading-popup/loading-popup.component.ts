import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-popup',
  templateUrl: './loading-popup.component.html',
  styleUrls: ['./loading-popup.component.scss']
})
export class LoadingPopupComponent {

  @Input()
  message = 'Loading...';

}
