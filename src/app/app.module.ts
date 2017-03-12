import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from "@angular/material";

import {AppComponent} from './app.component';
import { HelpDialogComponent } from './help-dialog/help-dialog.component';
import { AboutDialogComponent } from './about-dialog/about-dialog.component';
import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpDialogComponent,
    AboutDialogComponent,
    NavToolbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
  ],
  entryComponents: [HelpDialogComponent, AboutDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
