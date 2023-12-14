import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CodeEditorService {
  private baseUrl = 'http://your-api-base-url';

  constructor(private http: HttpClient) {}

  saveCode(code: string): Observable<any> {
    const url = `${this.baseUrl}/save-code`;
    const body = { code };

    return this.http.post(url, body);
  }
}
