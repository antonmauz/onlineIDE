// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { SettingsComponent } from './settings/settings.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'codeeditor', component: CodeEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
