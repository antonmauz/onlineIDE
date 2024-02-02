import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { EditorComponent } from './components/editor/editor.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectListComponent } from './components/project-list/project-list.component';

export const routes: Routes = [
  {
    path: 'projects/:id',
    component: ProjectDetailsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'editor', component: EditorComponent, canActivate: [AuthGuard] },
  {
    path: 'projects',
    component: ProjectListComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/projects' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
