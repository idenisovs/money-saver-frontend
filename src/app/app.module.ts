import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { LoginPageModule } from './pages/login-page/login-page.module';

@NgModule({
	declarations: [
		AppComponent,
	],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    ComponentsModule,
    LoginPageModule
  ],
	providers: [],
	exports: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
