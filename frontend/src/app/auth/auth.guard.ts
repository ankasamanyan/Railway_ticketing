import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { session } from '../session/session.module';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {
    const router: Router = inject(Router);
    const protectedRoutes: string[] = ['/admin'];
    return protectedRoutes.includes(state.url) && !session
    ? router.navigate(['/error/Unauthorized'])
    : false;
};
