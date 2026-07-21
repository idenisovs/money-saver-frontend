import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { finalize } from 'rxjs';

import { AuthApi } from '@api/auth-api';
import { UserService } from '@services/user-service';

@Component({
    selector: 'app-navbar',
    imports: [ RouterLink, NgbCollapse ],
    templateUrl: './navbar.html',
    styleUrl: './navbar.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
    private authApi = inject(AuthApi);
    private userService = inject(UserService);
    private router = inject(Router);

    protected readonly user = this.userService.user;
    protected readonly isCollapsed = signal(true);
    protected readonly username = computed(() => {
        const user = this.user();
        return user ? user.login : null;
    });

    protected toggle(): void {
        this.isCollapsed.update((collapsed) => !collapsed);
    }

    protected logout(): void {
        this.authApi.logout().pipe(
            finalize(() => {
                this.userService.clear();
                void this.router.navigate([ '/' ]);
            }),
        ).subscribe();
    }
}
