import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import {
  MonacoEditorModule,
  NGX_MONACO_EDITOR_CONFIG,
} from 'ngx-monaco-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { EditorComponent } from './components/editor/editor.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { SourceFileListComponent } from './components/source-file-list/source-file-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ProjectListComponent,
    SourceFileListComponent,
    ProjectDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule,
    MonacoEditorModule,
    CommonModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  providers: [
    AuthGuard,
    AuthService,
    { provide: NGX_MONACO_EDITOR_CONFIG, useValue: {} },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
