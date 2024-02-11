import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute } from '@angular/router';

import { from } from 'rxjs';

import { Project } from '../../classes/project/project';
import { SourceFile } from '../../classes/sourceFile/sourceFile';
import { ProjectService } from '../../services/project/project.service';
import { SourceFileService } from '../../services/sourceFile/source-file.service';
import { InputModalComponent } from '../input-modal/input-modal.component';

@Component({
  selector: 'app-source-file-list',
  templateUrl: './source-file-list.component.html',
  styleUrl: './source-file-list.component.css',
})
export class SourceFileListComponent {
  @ViewChild(InputModalComponent) inputModal!: InputModalComponent;
  @ViewChild(MatMenuTrigger, { static: true }) matMenuTrigger!: MatMenuTrigger;

  projectId: string | null = null;
  project: Project | undefined;
  selectedFile: SourceFile | null = null;
  menuTopLeftPosition = { x: 0, y: 0 };
  trigger: MatMenuTrigger | undefined;
  dialogRef: any;
  fileName: string = '';

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private sourceFileService: SourceFileService,
    public dialog: MatDialog
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

  deleteFile(fileId: string) {
    this.projectService.deleteFile(fileId).subscribe(() => {
      this.getProject();
    });
  }

  openMenu(event: MouseEvent, file: SourceFile, trigger: MatMenuTrigger): void {
    event.preventDefault();
    this.selectFile(file);

    this.menuTopLeftPosition.x = event.clientX;
    this.menuTopLeftPosition.y = event.clientY;

    this.trigger = trigger;
    this.trigger.openMenu();
  }

  openDialog(templateRef: TemplateRef<any>, file: SourceFile): void {
    this.selectFile(file);

    this.dialogRef = this.dialog.open(templateRef, {
      width: '600px',
    });

    this.dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        const updatedFile: SourceFile = {
          ...file,
          fileName: result,
        };
        from(this.projectService.updateSourceFile(updatedFile)).subscribe(
          () => {
            this.getProject();
          }
        );
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  shareProject() {
    // Add your logic here
    console.log('Project shared!');
  }
}
