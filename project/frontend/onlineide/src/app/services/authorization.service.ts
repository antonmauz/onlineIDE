// src/app/services/authorization.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private baseUrl = 'http://your-api-base-url';

  constructor(private http: HttpClient) {}

  checkPermission(permission: string): Observable<boolean> {
    const url = `${this.baseUrl}/check-permission`;
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );
    const params = { permission };

    return this.http.get<boolean>(url, { headers, params });
  }

  checkRole(role: string): Observable<boolean> {
    const url = `${this.baseUrl}/check-role`;
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );
    const params = { role };

    return this.http.get<boolean>(url, { headers, params });
  }
}
