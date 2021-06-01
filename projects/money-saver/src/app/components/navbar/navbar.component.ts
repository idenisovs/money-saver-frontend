import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
	collapsed = true;

	constructor(
		private http: HttpClient
	) {
	}

	logout() {
		this.http.get('/api/auth/logout').subscribe(() => {
			window.location.reload();
		});
	}
}
