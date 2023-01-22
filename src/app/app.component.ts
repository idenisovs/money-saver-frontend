import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth.service';
import { User } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'money-saver';
  isRequestRunning = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isRequestRunning = true;

    this.auth.getUserAuth().subscribe(this.processAuthResponse.bind(this));
  }

  async processAuthResponse(user: User|null) {
    this.isRequestRunning = false;

    if (!user) {
      await this.router.navigate(['']);
      return;
    }

    if (this.router.url === '/') {
      await this.router.navigate(['expenses']);
      history.pushState(null, '', window.location.href);
    }
  }
}
