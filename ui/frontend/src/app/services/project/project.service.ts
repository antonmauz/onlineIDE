import { Injectable } from '@angular/core';
import { PROJECT_BACKEND_URL } from '../../../../consts';
import { Project } from '../../classes/project/project';
import { Observable, of, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  deleteProject(projectId: number) {
    return from(
      fetch(`${PROJECT_BACKEND_URL}/projects/${projectId}`, {
        method: 'DELETE',
      }),
    ).pipe(
      switchMap((res) => {
        if (!res.ok) {
          throw new Error(`Error deleting project with ID ${projectId}`);
        }
        return of(res);
      }),
    );
  }

  constructor() {}

  getProjects() {
    return from(fetch(`${PROJECT_BACKEND_URL}/projects`)).pipe(
      switchMap((res) => res.json()),
    );
  }

  async addProject(project: Omit<Project, 'id'>) {
    return await fetch(`${PROJECT_BACKEND_URL}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    }).then((response) => response.json());
  }
}
