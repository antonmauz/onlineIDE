import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service'; // Make sure the path is correct
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectListComponent } from './components/project-list/project-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    ProjectListComponent,
    RouterLink,
    RouterLinkActive,
    ProjectDetailsComponent,
  ],
  providers: [AuthService, AuthGuard],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';

  constructor(public authService: AuthService) {}
}
