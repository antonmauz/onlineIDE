import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css',
})
export class ProjectDetailsComponent {
  constructor(private _location: Location) {}
  goBack() {
    this._location.back();
  }
}
