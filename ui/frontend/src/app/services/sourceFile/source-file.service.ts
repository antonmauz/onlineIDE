import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

import { SourceFile } from '../../classes/sourceFile/sourceFile';

@Injectable({
  providedIn: 'root',
})
export class SourceFileService {
  private _selectedFile = new BehaviorSubject<SourceFile | null>(null);
  selectedFile = this._selectedFile.asObservable();

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this._selectedFile.next(null);
      }
    });
  }

  selectFile(file: SourceFile) {
    this._selectedFile.next(file);
  }
}
