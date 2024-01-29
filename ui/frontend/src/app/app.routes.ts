import { Routes } from '@angular/router';

import { EditorComponent } from './components/editor/editor.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectListComponent } from './components/project-list/project-list.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'projects/:id',
    component: ProjectDetailsComponent,
  },
  { path: 'editor', component: EditorComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
];
