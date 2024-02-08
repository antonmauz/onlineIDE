import { Component } from '@angular/core';

import { CompiledSourceFileDTO, SourceFile, SourceFileDTO } from '../../classes/sourceFile/sourceFile';
import { SourceFileService } from '../../services/sourceFile/source-file.service';
import { CompilerService } from '../../services/compiler/compiler.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css',
})
export class EditorComponent {
  file: SourceFile | null = null;
  compilationResult: CompiledSourceFileDTO | null = null;

  constructor(
    private sourceFileService: SourceFileService,
    private compilerService: CompilerService
  ) {}

  ngOnInit() {
    this.sourceFileService.selectedFile.subscribe((file) => {
      this.file = file;
    });
  }

  async compile() {
    if (this.file) {
      const sourceFileDto = new SourceFileDTO(this.file.fileName, this.file.code);
      const compilationResult = await this.compilerService.compile(sourceFileDto);
      this.compilationResult = compilationResult;
    }
  }

  editorOptions = { theme: 'vs-dark', language: 'java' };
}
