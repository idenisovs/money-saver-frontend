import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [MainPageComponent, DashboardViewComponent, NavbarComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
