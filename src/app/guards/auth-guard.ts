import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { map } from 'rxjs';

import { AuthApi } from '@api/auth-api';
import { User } from '@shared';

export const authGuard: CanActivateFn = () => {
    const auth = inject(AuthApi);
    const router = inject(Router);

    return auth.getUser().pipe(
        map((user: User | null): true | UrlTree => {
            if (user) {
                return true;
            } else {
                return router.parseUrl('/')
            }
        })
    );
};
