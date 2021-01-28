import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { YearsModule } from './views/years/years.module';
import { IntervalsModule } from './views/intervals/intervals.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        MainPageComponent,
        MessagesComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        ChartsModule,
        DashboardModule,
        YearsModule,
        IntervalsModule
    ],
    providers: [],
    exports: [
        MessagesComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
