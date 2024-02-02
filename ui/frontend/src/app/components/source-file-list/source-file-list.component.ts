import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../../classes/project/project';
import { SourceFile } from '../../classes/sourceFile/sourceFile';
import { ProjectService } from '../../services/project/project.service';
import { SourceFileService } from '../../services/sourceFile/source-file.service';

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
    private route: ActivatedRoute,
    private sourceFileService: SourceFileService
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

  selectFile(file: SourceFile) {
    this.sourceFileService.selectFile(file);
  }

  addFile() {
    const newFile: Omit<SourceFile, 'id'> = {
      fileName: `test-project-${Math.floor(Math.random() * 1000)}`,
      sourceCode: 'function x() {\nconsole.log("Hello world!");\n}',
      project: this.projectId ?? '',
    };

    this.projectService.addSourceFile(newFile); // TODO @cdans .then(this.getProject.bind(this));
  }

  shareProject() {
    // Add your logic here
    console.log('Project shared!');
  }
}
