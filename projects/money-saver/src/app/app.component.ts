import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  requestInProgress = true;
  isAuthenticated = false;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.get().subscribe((auth: any) => {
      this.requestInProgress = false;
    });
  }
}
