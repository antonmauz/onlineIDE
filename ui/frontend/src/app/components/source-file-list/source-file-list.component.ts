import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../../classes/project/project';
import { CreateSourceFileDTO, SourceFile } from '../../classes/sourceFile/sourceFile';
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
    const randomNumber = Math.floor(Math.random() * 1000);
    const fileName = `HelloWorld${randomNumber}`;
    const newFile: CreateSourceFileDTO = {
      fileName: `HelloWorld${randomNumber}.java`,
      code: `public class ${fileName} { public static void main(String[] args) { System.out.println(\"Hello, World!\"); } }`,
      project: this.projectId ?? '',
    };

    this.projectService.addSourceFile(newFile).then(this.getProject.bind(this));
  }

  shareProject() {
    // Add your logic here
    console.log('Project shared!');
  }
}
