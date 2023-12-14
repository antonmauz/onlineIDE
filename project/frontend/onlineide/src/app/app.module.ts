// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { SettingsComponent } from './settings/settings.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { CiCdStatusComponent } from './ci-cd-status/ci-cd-status.component';

import { ProjectService } from './services/project.service';
import { ProjectDetailsService } from './services/project-details.service';
import { UserAuthenticationService } from './services/user-authentication.service';
import { AuthorizationService } from './services/authorization.service';
import { CodeEditorService } from './services/code-editor.service';
import { CiCdService } from './services/ci-cd.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditorComponent,
    SettingsComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    UserAuthenticationComponent,
    AuthorizationComponent,
    CodeEditorComponent,
    CiCdStatusComponent,

    ProjectService,
    ProjectDetailsService,
    UserAuthenticationService,
    AuthorizationService,
    CodeEditorService,
    CiCdService,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
