import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HelpDialogComponent } from './help-dialog/help-dialog.component';
import { AboutDialogComponent } from './about-dialog/about-dialog.component';
import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG, FIREBASE_AUTH_CONFIG } from './database_config';
import { HistoryListComponent } from './history-list/history-list.component';
import { HistoryFormComponent } from './history-form/history-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpDialogComponent,
    AboutDialogComponent,
    NavToolbarComponent,
    LoginComponent,
    HistoryListComponent,
    HistoryFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG, FIREBASE_AUTH_CONFIG),
  ],
  entryComponents: [HelpDialogComponent, AboutDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
