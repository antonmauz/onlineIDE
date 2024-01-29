import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

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
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent {
  constructor(private projectService: ProjectService) {}

  getProjects() {
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }

  ngOnInit(): void {
    this.getProjects();
  }

  displayedColumns: string[] = ['id', 'name', 'users', 'actions'];
  projects: Project[] = [];

  addProject() {
    const newProject: Omit<Project, 'id'> = {
      name: `${COLORS[Math.floor(Math.random() * COLORS.length)]} ${
        ANIMALS[Math.floor(Math.random() * ANIMALS.length)]
      }`,
    };

    this.projectService
      .addProject(newProject)
      .then(this.getProjects.bind(this));
  }

  deleteProject(projectId: number) {
    this.projectService
      .deleteProject(projectId)
      .subscribe(() => this.getProjects());
  }

  openProject(projectId: string) {
    // Logic to open a project by its ID
  }

  //...
}
