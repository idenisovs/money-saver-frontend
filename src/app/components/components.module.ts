import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './spinner/spinner.component';
import { MessagesModule } from './messages/messages.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbCollapse } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    SpinnerComponent,
    NavbarComponent
  ],
	exports: [
		SpinnerComponent,
		MessagesModule,
		NavbarComponent
	],
  imports: [
    CommonModule,
    MessagesModule,
    NgbCollapse
  ]
})
export class ComponentsModule { }
