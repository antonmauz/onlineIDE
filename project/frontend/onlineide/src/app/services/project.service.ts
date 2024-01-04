import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private baseUrl = 'http://your-api-base-url'; // Replace with your actual API base URL

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any[]> {
    const url = `${this.baseUrl}/projects`; // Replace with your actual API endpoint

    return this.http.get<any[]>(url);
  }

  // Add more methods for creating, updating, and deleting projects
}
