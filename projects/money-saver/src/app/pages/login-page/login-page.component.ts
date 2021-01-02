import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @Output()
  success = new EventEmitter<void>();

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
  }

  login() {
    this.loginForm.disable();

    this.auth.login(this.loginForm.value).subscribe(() => {
      this.loginForm.enable();
      this.loginForm.reset();

      if (this.auth.User) {
        this.success.emit();
      }
    });
  }

}
