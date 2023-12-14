import { Component } from '@angular/core';
import { CodeEditorService } from '../services/code-editor.service';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css'],
})
export class CodeEditorComponent {
  code: string = '';

  constructor(private codeEditorService: CodeEditorService) {}

  saveCode() {
    this.codeEditorService.saveCode(this.code).subscribe(
      (response: any) => {
        console.log('Code saved successfully:', response);
      },
      (error: any) => {
        console.error('Error saving code:', error);
      }
    );
  }
}
