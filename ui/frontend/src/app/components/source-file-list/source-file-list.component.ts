import {
  Component,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../../classes/project/project';
import { SourceFile } from '../../classes/sourceFile/sourceFile';
import { ProjectService } from '../../services/project/project.service';
import {
  SourceFileService,
} from '../../services/sourceFile/source-file.service';
import { InputModalComponent } from '../input-modal/input-modal.component';

@Component({
  selector: 'app-source-file-list',
  templateUrl: './source-file-list.component.html',
  styleUrl: './source-file-list.component.css',
})
export class SourceFileListComponent {
  @ViewChild(InputModalComponent) inputModal!: InputModalComponent;

  projectId: string | null = null;
  project: Project | undefined;
  selectedFile: SourceFile | null = null;

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
    this.sourceFileService.selectedFile.subscribe((file) => {
      this.selectedFile = file;
    });
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
