import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth.service';
import { Auth } from './shared';

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

    this.auth.getAuth().subscribe(this.processAuthResponse.bind(this));
  }

  async processAuthResponse(auth: Auth|null) {
    this.isRequestRunning = false;

    if (auth) {
      return;
    }

    await this.router.navigate(['']);
  }
}
