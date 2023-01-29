import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

import { SpinnerComponent } from './spinner/spinner.component';
import { MessagesModule } from './messages/messages.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LoadingPopupModule } from './loading-popup/loading-popup.module';

@NgModule({
  declarations: [
    SpinnerComponent,
    NavbarComponent
  ],
	exports: [
		SpinnerComponent,
		MessagesModule,
		NavbarComponent,
    LoadingPopupModule
	],
  imports: [
    CommonModule,
    MessagesModule,
    NgbCollapse,
    RouterLink,
    RouterLinkActive
  ]
})
export class ComponentsModule { }
