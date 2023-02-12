import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ExpensesPageComponent } from './pages/expenses-page/expenses-page.component';
import { SettingsPageComponent } from "./pages/settings-page/settings-page.component";
import { IntervalsPageComponent } from './pages/intervals-page/intervals-page.component';
import { YearsPageComponent } from './pages/years-page/years-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'expenses',
    component: ExpensesPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'years',
    pathMatch: 'full',
    component: YearsPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'years/:year',
    component: IntervalsPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    component: SettingsPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
