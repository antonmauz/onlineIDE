// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { CiCdStatusComponent } from './ci-cd-status/ci-cd-status.component';

const routes: Routes = [
  { path: 'login', component: UserAuthenticationComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projectdetails', component: ProjectDetailsComponent },
  { path: 'codeeditor', component: CodeEditorComponent },
  { path: 'cicdstatus', component: CiCdStatusComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
