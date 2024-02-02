import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../../classes/project/project';
import { ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'app-source-file-list',
  templateUrl: './source-file-list.component.html',
  styleUrl: './source-file-list.component.css',
})
export class SourceFileListComponent {
  projectId: string | null = null;
  project: Project | undefined;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  getProject() {
    this.projectService
      .getProject(this.projectId ?? '')
      .subscribe((project) => (this.project = project));
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');
    this.getProject();
  }

  addFile() {
    // Add your logic here
    console.log('File added!');
  }

  shareProject() {
    // Add your logic here
    console.log('Project shared!');
  }
}
