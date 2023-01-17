import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { Auth, User } from '../../shared';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  authRequestRunning = false;
  authForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
  }

  async ngOnInit() {
    if (this.auth.IsAuthenticated) {
      await this.router.navigate(['expenses']);
    }
  }

  async authenticate() {
    this.authRequestRunning = true;
    this.authForm.disable();

    this.auth.authenticate(this.authForm.value as Auth).subscribe((response: User|null) => {
      this.authRequestRunning = false;
      this.authForm.reset();
      this.authForm.enable();

      if (response) {
        this.router.navigate(['expenses']);
      }
    });
  }
}
