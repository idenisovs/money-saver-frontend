import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { YearsComponent } from './views/years/years.component';
import { IntervalsComponent } from './views/intervals/intervals.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'years', component: YearsComponent },
  { path: 'years/:year', component: IntervalsComponent },
  { path: 'intervals/:intervalId', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
