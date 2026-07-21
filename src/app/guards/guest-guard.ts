import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { map } from 'rxjs';

import { AuthApi } from '@api/auth-api';
import { User } from '@shared';

export const guestGuard: CanActivateFn = () => {
    const auth = inject(AuthApi);
    const router = inject(Router);

    return auth.getUser().pipe(
        map((user: User | null): true | UrlTree => {
            if (user) {
                return router.parseUrl('/dashboard')
            } else {
                return true;
            }
        })
    );
};
