import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from '../components/messages/messages.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginPageRoutingModule,
    MessagesModule
  ]
})
export class LoginPageModule { }
