import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        component: DashboardViewComponent
      },
      {
        path: 'dashboard',
        component: DashboardViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  bootstrap: [MainPageComponent]
})
export class MainPageRoutingModule { }
