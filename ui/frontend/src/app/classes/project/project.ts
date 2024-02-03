export class Project {
  id: number;
  name: string;
  // TODO @cdans improve type
  sourceFiles: any[];
  constructor(id: number, name: string, sourceFiles: any[]) {
    this.id = id;
    this.name = name;
    this.sourceFiles = sourceFiles;
  }
}
