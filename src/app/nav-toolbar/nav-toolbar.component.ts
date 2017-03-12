import { Component } from '@angular/core';
import {MdDialog} from '@angular/material';
import {HelpDialogComponent} from "../help-dialog/help-dialog.component";
import {AboutDialogComponent} from "../about-dialog/about-dialog.component";

@Component({
  selector: 'caracoleitor-nav-toolbar',
  templateUrl: './nav-toolbar.component.html',
  styleUrls: ['./nav-toolbar.component.css']
})
export class NavToolbarComponent {

  constructor(public dialog: MdDialog) {
  }

  openHelpDialog(): void {
    this.dialog.open(HelpDialogComponent);
  }

  openAboutDialog(): void {
    this.dialog.open(AboutDialogComponent);
  }
}
