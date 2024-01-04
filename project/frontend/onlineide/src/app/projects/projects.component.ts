import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: any[] = [];

  constructor(private projectService: ProjectService) {}

  getProjects() {
    this.projectService.getProjects().subscribe(
      (result: any) => {
        this.projects = result;
      },
      (error: any) => {
        console.error('Error fetching projects:', error);
      }
    );
  }
}
