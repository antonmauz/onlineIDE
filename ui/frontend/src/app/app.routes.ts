import { Routes } from '@angular/router';
import { EditorComponent } from './components/editor/editor.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

export const routes: Routes = [
  {
    path: 'projects/:id',
    component: ProjectDetailsComponent
  },
  {path: 'editor', component: EditorComponent},
  {path: 'projects', component: ProjectListComponent},
  {path: '', redirectTo: '/projects', pathMatch: 'full'},
  ];
