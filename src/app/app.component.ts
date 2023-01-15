import { Component, OnInit } from '@angular/core';
import { AuthService } from "./services/auth.service";
import { Router } from '@angular/router';

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

    this.auth.getAuth().subscribe(async (auth) => {
      this.isRequestRunning = false;

      if (auth) {
        return;
      }

      await this.router.navigate(['']);
    });
  }
}
