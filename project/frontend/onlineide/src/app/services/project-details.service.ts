import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectDetailsService {
  private baseUrl = 'http://your-api-base-url';

  constructor(private http: HttpClient) {}

  getProjectDetails(projectId: string): Observable<any> {
    const url = `${this.baseUrl}/project-details/${projectId}`;

    return this.http.get<any>(url);
  }
}
