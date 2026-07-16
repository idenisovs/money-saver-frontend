import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-login-view',
  imports: [],
  templateUrl: './login-view.html',
  styleUrl: './login-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginView {}
