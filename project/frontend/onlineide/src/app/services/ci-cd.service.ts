import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CiCdService {
  private baseUrl = 'http://your-api-base-url';

  constructor(private http: HttpClient) {}
}
