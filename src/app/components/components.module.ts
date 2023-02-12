import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

import { SpinnerComponent } from './spinner/spinner.component';
import { MessagesModule } from './messages/messages.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LoadingPopupModule } from './loading-popup/loading-popup.module';
import { BorderlessSpinnerComponent } from './borderless-spinner/borderless-spinner.component';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [
    SpinnerComponent,
    NavbarComponent,
    BorderlessSpinnerComponent
  ],
	exports: [
		SpinnerComponent,
		MessagesModule,
		NavbarComponent,
		LoadingPopupModule,
		BorderlessSpinnerComponent,
    BreadcrumbModule
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
