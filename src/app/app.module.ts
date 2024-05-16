import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseChartDirective } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { ExpensesPageModule } from './pages/expenses-page/expenses-page.module';
import { YearsPageComponent } from './pages/years-page/years-page.component';
import { IntervalsPageModule } from './pages/intervals-page/intervals-page.module';

@NgModule({
	declarations: [
		AppComponent,
    YearsPageComponent,
	],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    ComponentsModule,
    LoginPageModule,
    ExpensesPageModule,
    IntervalsPageModule,
    BaseChartDirective,
  ],
	providers: [],
	exports: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
