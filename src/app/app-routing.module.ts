import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ExpensesPageComponent } from './pages/expenses-page/expenses-page.component';
import { SettingsPageComponent } from "./pages/settings-page/settings-page.component";

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
