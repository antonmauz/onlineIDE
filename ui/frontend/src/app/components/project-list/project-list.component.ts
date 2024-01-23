import { Component } from '@angular/core';
import { Project } from '../../classes/project/project';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ProjectService } from '../../services/project/project.service';


@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, MatTableModule, MatPaginatorModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {

  constructor(private projectService: ProjectService) { }

  getProjects() {
  this.projectService.getProjects().subscribe((projects) => this.projects = projects);
  }

  ngOnInit(): void {
    this.getProjects();
  }

  displayedColumns: string[] = ['id', 'name', 'users', 'actions'];
  projects: Project[] = [];

  addProject() {
    const colors = ["Blue", "Red", "Green", "Yellow", "Purple", "Orange", "Pink", "Brown", "Black", "White"];
    const animals = ["Dog", "Cat", "Bird", "Fish", "Lizard", "Snake", "Horse", "Cow", "Pig", "Sheep", "Frog", "Dragon", "Dragonfly"];
    const newProject: Omit<Project, 'id'> = { name: `${colors[Math.floor(Math.random() * colors.length)]} ${animals[Math.floor(Math.random() * animals.length)]}` };
    this.projectService
      .addProject(newProject)
      .then(this.getProjects.bind(this));
  }
  deleteProject(projectId: number) {
    this.projectService.deleteProject(projectId).subscribe(() => this.getProjects());
  }

  openProject(projectId: string) {
    // Logic to open a project by its ID
  }

    //...
}
