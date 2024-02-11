import { Component, OnInit } from '@angular/core';

import {
  CompiledSourceFileDTO,
  SourceFile,
  SourceFileDTO,
} from '../../classes/sourceFile/sourceFile';
import { CompilerService } from '../../services/compiler/compiler.service';
import { ProjectService } from '../../services/project/project.service';
import { SourceFileService } from '../../services/sourceFile/source-file.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  file: SourceFile | null = null;
  compilationResult: CompiledSourceFileDTO | null = null;
  language: string | null = null;
  editorOptions: any;
  editor: any;

  constructor(
    private sourceFileService: SourceFileService,
    private compilerService: CompilerService,
    private projectService: ProjectService
  ) {}

  onInitEditor(editor: any) {
    this.editor = editor;
  }

  ngOnInit() {
    this.sourceFileService.selectedFile.subscribe((file) => {
      this.file = file;
      this.updateEditorLanguage();
    });
  }

  private getFileType(): string | null | undefined {
    if (!this.file) {
      return null;
    }
    return this.file.fileName.split('.').pop();
  }

  private updateEditorLanguage() {
    const fileType = this.getFileType();
    let language = 'text/plain';
    if (fileType === 'java') {
      language = 'java';
    } else if (fileType === 'c') {
      language = 'c';
    }
    this.editorOptions = { theme: 'vs-dark', language: language };
  }

  async compile() {
    if (!this.file) {
      return;
    }
    const sourceFileDto = new SourceFileDTO(this.file.fileName, this.file.code);
    const compilationResult = await this.compilerService.compile(sourceFileDto);
    this.compilationResult = compilationResult;
  }

  saveCode() {
    if (!this.file || !this.editor) {
      return;
    }

    const updatedFile = {
      ...this.file,
      code: this.editor.getModel().getValue(),
    };
    this.projectService.updateSourceFile(updatedFile);
  }
}
