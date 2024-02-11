import { Component } from '@angular/core';

import { from } from 'rxjs';

import { Project } from '../../classes/project/project';
import { ProjectService } from '../../services/project/project.service';

const COLORS = [
  'Blue',
  'Red',
  'Green',
  'Yellow',
  'Purple',
  'Orange',
  'Pink',
  'Brown',
  'Black',
  'White',
];
const ANIMALS = [
  'Dog',
  'Cat',
  'Bird',
  'Fish',
  'Lizard',
  'Snake',
  'Horse',
  'Cow',
  'Pig',
  'Sheep',
  'Frog',
  'Dragon',
  'Dragonfly',
];

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent {
  newName: string | undefined;

  constructor(private projectService: ProjectService) {}

  getProjects() {
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }

  ngOnInit(): void {
    this.getProjects();
  }

  displayedColumns: string[] = ['id', 'name', 'users', 'files', 'actions'];
  projects: Project[] = [];

  addProject() {
    const newProject: Omit<Project, 'id' | 'sourceFiles'> = {
      name: `${COLORS[Math.floor(Math.random() * COLORS.length)]} ${
        ANIMALS[Math.floor(Math.random() * ANIMALS.length)]
      }`,
    };

    this.projectService
      .addProject(newProject)
      .then(this.getProjects.bind(this));
  }

  updateProject(project: Project, newName: string | undefined) {
    if (newName !== undefined) {
      project.name = newName;

      from(this.projectService.updateProject(project)).subscribe(() =>
        this.getProjects()
      );
    }
  }

  deleteProject(projectId: number) {
    from(this.projectService.deleteProject(projectId)).subscribe(() =>
      this.getProjects()
    );
  }
}
