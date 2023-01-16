import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page.component';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
	imports: [
		CommonModule,
		ComponentsModule,
		DirectivesModule,
		ReactiveFormsModule,
	]
})
export class LoginPageModule { }
