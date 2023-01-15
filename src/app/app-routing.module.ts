import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ExpensesPageComponent } from './pages/expenses-page/expenses-page.component';

const routes: Routes = [
  {
    path: '', component: LoginPageComponent, pathMatch: 'full'
  },
  {
    path: 'expenses', component: ExpensesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
