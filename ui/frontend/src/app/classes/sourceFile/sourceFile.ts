export class SourceFile {
  id: number;
  fileName: string;
  sourceCode: string;
  project: string;
  constructor(
    id: number,
    fileName: string,
    sourceCode: string,
    project: string
  ) {
    this.id = id;
    this.fileName = fileName;
    this.sourceCode = sourceCode;
    this.project = project;
  }
}
