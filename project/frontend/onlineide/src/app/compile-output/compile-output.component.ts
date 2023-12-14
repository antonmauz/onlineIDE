import { Component } from '@angular/core';
import { CompilerService } from '../services/compiler.service';

@Component({
  selector: 'app-compile-output',
  templateUrl: './compile-output.component.html',
  styleUrls: ['./compile-output.component.css'],
})
export class CompileOutputComponent {
  compileResult: string = '';

  constructor(private compilerService: CompilerService) {}

  compileCode() {
    this.compilerService.compileCode().subscribe(
      (result: any) => {
        this.compileResult = result;
      },
      (error: any) => {
        console.error('Error compiling code:', error);
      }
    );
  }
}
