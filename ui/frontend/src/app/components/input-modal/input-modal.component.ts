import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SourceFile } from '../../classes/sourceFile/sourceFile';
import { ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrl: './input-modal.component.css',
})
export class InputModalComponent {
  @Output() addFileEvent = new EventEmitter<string>();
  userInput = '';
  showModal = false;

  projectId: string | null = null;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');
  }

  addFile() {
    this.addFileEvent.emit(this.userInput);

    const newFile: Omit<SourceFile, 'id'> = {
      fileName: this.userInput,
      sourceCode: 'function x() {\nconsole.log("Hello world!");\n}',
      project: this.projectId ?? '',
    };

    console.log('Adding file:', this.userInput);

    this.projectService.addSourceFile(newFile).then(() => {
      this.closeModal();
    }); // TODO @cdans .then(this.getProject.bind(this));
  }

  closeModal() {
    this.showModal = false;
  }

  openModal() {
    this.showModal = true;
  }
}
