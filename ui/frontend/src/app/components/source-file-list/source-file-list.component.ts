import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-source-file-list',
  standalone: true,
  imports: [MatListModule, MatButtonModule],
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
