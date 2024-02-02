export class SourceFile {
  id: number;
  fileName: string;
  sourceCode: string;
  project: number;
  constructor(
    id: number,
    fileName: string,
    sourceCode: string,
    project: number
  ) {
    this.id = id;
    this.fileName = fileName;
    this.sourceCode = sourceCode;
    this.project = project;
  }
}
