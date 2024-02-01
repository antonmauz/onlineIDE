import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HttpClientXsrfModule,
} from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { MonacoEditorModule } from 'ngx-monaco-editor';
import { catchError, Observable, of } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { EditorComponent } from './components/editor/editor.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { SourceFileListComponent } from './components/source-file-list/source-file-list.component';

// see https://stackoverflow.com/a/74813159
function getCsrfToken(httpClient: HttpClient): () => Observable<any> {
  return () => httpClient.get('/csrf').pipe(catchError((err) => of(null)));
}

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
    {
      provide: APP_INITIALIZER,
      useFactory: getCsrfToken,
      deps: [HttpClient],
      multi: true,
    },
    AuthGuard,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
