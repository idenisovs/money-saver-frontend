import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm = this.fb.group({
    login: this.fb.control(''),
    password: this.fb.control('')
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  authenticate() {
    this.auth.authenticate({
      username: this.loginForm.get('login').value,
      password: this.loginForm.get('password').value
    });

    this.loginForm.reset();
  }

}
