import { Component } from '@angular/core';
import { EditorComponent } from '../editor/editor.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { Location } from '@angular/common';
import { SourceFileListComponent } from '../source-file-list/source-file-list.component';
@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [EditorComponent, MatSidenavModule, MatButtonModule, SourceFileListComponent],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css',
})
export class ProjectDetailsComponent {
  constructor(private _location: Location) {}
  goBack() {
    this._location.back();
  }
}
