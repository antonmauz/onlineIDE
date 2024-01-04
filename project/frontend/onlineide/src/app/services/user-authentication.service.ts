import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticationService {
  private baseUrl = 'http://your-api-base-url';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/login`;
    const body = { username, password };

    return this.http.post(url, body);
  }

  logout(): Observable<any> {
    const url = `${this.baseUrl}/logout`;

    return this.http.post(url, {});
  }
}
