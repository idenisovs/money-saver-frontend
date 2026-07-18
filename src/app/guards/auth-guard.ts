import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';

import { AuthApi } from '../api/auth-api';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthApi);
  const router = inject(Router);

  return auth.getUser().pipe(map((user) => (user ? true : router.parseUrl('/'))));
};
