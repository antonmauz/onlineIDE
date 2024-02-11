import { Injectable } from '@angular/core';

import { from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { PROJECT_BACKEND_URL } from '../../../../consts';
import { Project } from '../../classes/project/project';
import {
  CreateSourceFileDTO,
  SourceFile,
} from '../../classes/sourceFile/sourceFile';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  deleteProject(projectId: number) {
    return from(
      fetch(`${PROJECT_BACKEND_URL}/projects/${projectId}`, {
        method: 'DELETE',
      })
    ).pipe(
      switchMap((res) => {
        if (!res.ok) {
          throw new Error(`Error deleting project with ID ${projectId}`);
        }
        return of(res);
      })
    );
  }

  getProjects() {
    return from(fetch(`${PROJECT_BACKEND_URL}/projects`)).pipe(
      switchMap((res) => res.json())
    );
  }

  async addProject(project: Omit<Project, 'id' | 'sourceFiles'>) {
    return await fetch(`${PROJECT_BACKEND_URL}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    }).then((response) => response.json());
  }

  async updateProject(project: Project) {
    return await fetch(`${PROJECT_BACKEND_URL}/projects/${project.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    }).then((response) => response.json());
  }

  getProject(projectId: string) {
    return from(fetch(`${PROJECT_BACKEND_URL}/projects/${projectId}`)).pipe(
      switchMap((res) => res.json())
    );
  }

  getSourceFile(fileId: number) {
    return from(fetch(`${PROJECT_BACKEND_URL}/sourcefiles/${fileId}`)).pipe(
      switchMap((res) => res.json())
    );
  }

  async addSourceFile(file: CreateSourceFileDTO) {
    return await fetch(`${PROJECT_BACKEND_URL}/sourcefiles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(file),
    }).then((response) => response.json());
  }

  async updateSourceFile(file: SourceFile) {
    return await fetch(`${PROJECT_BACKEND_URL}/sourcefiles/${file.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(file),
    }).then((response) => response.json());
  }

  deleteFile(fileId: string) {
    return from(
      fetch(`${PROJECT_BACKEND_URL}/sourcefiles/${fileId}`, {
        method: 'DELETE',
      })
    ).pipe(
      switchMap((res) => {
        if (!res.ok) {
          throw new Error(`Error deleting file with ID ${fileId}`);
        }
        return of(res);
      })
    );
  }
}
