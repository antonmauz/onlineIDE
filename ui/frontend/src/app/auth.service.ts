import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ReplaySubject } from 'rxjs';

import { GATEWAY_BACKEND_URL } from '../../consts';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authenticated$: ReplaySubject<boolean> = new ReplaySubject<boolean>(
    1
  );

  public get authenticated(): ReplaySubject<boolean> {
    return this.authenticated$;
  }

  constructor(private httpClient: HttpClient, private router: Router) {
    this.checkAuthentication();
  }

  public checkAuthentication(): void {
    this.httpClient
      .get<boolean>(`${GATEWAY_BACKEND_URL}/api/authenticated`)
      .subscribe(
        (authenticated) => {
          this.authenticated$.next(authenticated);
        },
        (err) => {
          this.authenticated$.next(false);
        }
      );
  }

  public login(): void {
    window.location.href = `${GATEWAY_BACKEND_URL}/login`; // handled by backend
  }

  public logout(): void {
    this.httpClient.post(`${GATEWAY_BACKEND_URL}/logout`, {}).subscribe(() => {
      this.router.navigateByUrl('/');
      this.checkAuthentication();
    });
  }
}
