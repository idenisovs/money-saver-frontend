import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { map, tap } from 'rxjs';

import { AuthApi } from '@api/auth-api';
import { UserService } from '@services/user-service';
import { User } from '@shared';

export const guestGuard: CanActivateFn = () => {
    const auth = inject(AuthApi);
    const router = inject(Router);
    const userService = inject(UserService);

    return auth.getUser().pipe(
        tap((user: User | null) => userService.setUser(user)),
        map((user: User | null): true | UrlTree => {
            if (user) {
                return router.parseUrl('/dashboard')
            } else {
                return true;
            }
        })
    );
};
