import { Injectable } from '@angular/core';
import { COMPILER_BACKEND_URL } from '../../../../consts';
import { SourceFile, SourceFileDTO } from '../../classes/sourceFile/sourceFile';

@Injectable({
  providedIn: 'root'
})
export class CompilerService {
  constructor() { }

  async compile(sourceFile: SourceFileDTO) {
    return await fetch(COMPILER_BACKEND_URL + '/compile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sourceFile),
    }).then((response) => response.json());
  }
}
