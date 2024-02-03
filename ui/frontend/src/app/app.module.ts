import { CommonModule } from '@angular/common';
import {
  HttpClientModule,
  HttpClientXsrfModule,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule

import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { EditorComponent } from './components/editor/editor.component';
import {
  InputModalComponent,
} from './components/input-modal/input-modal.component';
import {
  ProjectDetailsComponent,
} from './components/project-details/project-details.component';
import {
  ProjectListComponent,
} from './components/project-list/project-list.component';
import {
  SourceFileListComponent,
} from './components/source-file-list/source-file-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ProjectListComponent,
    SourceFileListComponent,
    ProjectDetailsComponent,
    InputModalComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule,
    MonacoEditorModule.forRoot(),
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule,
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
