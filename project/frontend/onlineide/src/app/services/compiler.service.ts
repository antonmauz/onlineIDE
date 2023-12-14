import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompilerService {
  private baseUrl = 'http://your-api-base-url';

  constructor(private http: HttpClient) {}

  compileCode(): Observable<string> {
    const url = `${this.baseUrl}/compile`;

    return this.http.post<string>(url, {});
  }
}
