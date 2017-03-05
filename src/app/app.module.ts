import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from "@angular/material";

import {AppComponent, HelpDialog, AboutDialog} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpDialog,
    AboutDialog,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
  ],
  entryComponents: [HelpDialog, AboutDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
