import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable, tap } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  /**
 * Method which is activated before each route change to a route which requires this
ard.
 * E.g. [{ path: 'secure', component: SecureComponent, canActivate: [AuthGuard]}, ...]
 *
 * @param next
 * @param state
 */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return (
      this.authService.authenticated
        // pipe each value that is emitted by the observable
        .pipe(
          // tap will intercept each emission of a value and perform some action
          tap((authenticated) => {
            if (!authenticated) {
              // if user is not authenticated, try login via `AuthService`
              this.authService.login();
            }
          })
        )
    );
  }
}
