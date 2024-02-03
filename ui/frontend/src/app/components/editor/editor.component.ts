import { Component } from '@angular/core';

import { SourceFile } from '../../classes/sourceFile/sourceFile';
import { SourceFileService } from '../../services/sourceFile/source-file.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css',
})
export class EditorComponent {
  file: SourceFile | null = null;

  constructor(private sourceFileService: SourceFileService) {}

  ngOnInit() {
    this.sourceFileService.selectedFile.subscribe((file) => {
      this.file = file;
    });
  }

  editorOptions = { theme: 'vs-dark', language: 'javascript' };
}
