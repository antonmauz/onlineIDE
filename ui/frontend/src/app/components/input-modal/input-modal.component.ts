import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CreateSourceFileDTO } from '../../classes/sourceFile/sourceFile';
import { ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrl: './input-modal.component.css',
})
export class InputModalComponent {
  @Output() fileAdded = new EventEmitter<void>();
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
    const newFile: CreateSourceFileDTO = {
      fileName: this.userInput,
      code: `public class ${this.userInput} { public static void main(String[] args) { System.out.println(\"Hello, World!\"); } }`,
      project: this.projectId ?? '',
    };

    console.log('Adding file:', this.userInput);

    this.projectService.addSourceFile(newFile).then(() => {
      this.userInput = '';
      this.closeModal();
      this.fileAdded.emit();
    });
  }

  closeModal() {
    this.showModal = false;
  }

  openModal() {
    this.showModal = true;
  }
}
