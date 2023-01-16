import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  authForm = this.fb.group({
    username: [''],
    password: ['']
  });

  constructor(
    private fb: FormBuilder
  ) {
  }

  authenticate() {
    console.log('Authenticate!');
    console.log(this.authForm.value);
  }
}
