import { Component } from '@angular/core';

@Component({
  selector: 'app-source-file-list',
  templateUrl: './source-file-list.component.html',
  styleUrl: './source-file-list.component.css',
})
export class SourceFileListComponent {
  constructor() {}

  addFile() {
    // Add your logic here
    console.log('File added!');
  }

  shareProject() {
    // Add your logic here
    console.log('Project shared!');
  }
}
