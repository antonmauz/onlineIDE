export class SourceFile {
  id: number;
  fileName: string;
  code: string;
  project: string;
  stdout: string = '';
  stderr: string = '';
  compilable: boolean = false;
  constructor(
    id: number,
    fileName: string,
    code: string,
    project: string,
  ) {
    this.id = id;
    this.fileName = fileName;
    this.code = code;
    this.project = project;
  }
}

export class CompiledSourceFileDTO {
  fileName: string;
  code: string;
  stdout: string;
  stderr: string;
  compilable: boolean;
  constructor(fileName: string, code: string, stdout: string, stderr: string, compilable: boolean) {
    this.fileName = fileName;
    this.code = code;
    this.stdout = stdout;
    this.stderr = stderr;
    this.compilable = compilable;
  }
}


export class CreateSourceFileDTO {
  fileName: string;
  code: string;
  project: string;
  constructor(fileName: string, code: string, project: string) {
    this.fileName = fileName;
    this.code = code;
    this.project = project;
  }
}

export class SourceFileDTO {
  fileName: string;
  code: string;
  constructor(fileName: string, code: string) {
    this.fileName = fileName;
    this.code = code;
  }
}
