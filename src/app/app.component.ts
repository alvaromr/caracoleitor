import {Component, OnInit} from '@angular/core';
import {HistoryPiece} from "./history-piece";
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  textToShow: string;
  textToHide: string;
  finished: boolean;
  history: HistoryPiece [];

  constructor(public dialog: MdDialog) {
  }

  ngOnInit(): void {
    this.start();
  }

  addPiece(hiddenText: string, shownText: string): void {
    let piece: HistoryPiece = new HistoryPiece(hiddenText, shownText);
    this.history.push(piece);
  }

  send(): void {
    if (!this.textToShow || !this.textToHide) {
      return;
    }
    this.addPiece(this.textToHide, this.textToShow);
    this.textToShow = '';
    this.textToHide = '';
  }

  start(): void {
    this.history = [];
    this.finished = false;
    this.textToHide = '';
    this.textToShow = '';
  }

  finish(): void {
    this.finished = true;
  }

  oddEvenClass(): any {
    let even = this.history.length % 2 == 0;
    return {odd: !even, even: even}
  }

  openHelpDialog(): void {
    this.dialog.open(HelpDialog);
  }

  openAboutDialog(): void {
    this.dialog.open(AboutDialog);
  }
}

@Component({
  selector: 'help-dialog',
  template: `
  <p>
     Caracoleitor es un juego para varios jugadores, en el que escribes una historia de la que el resto solo puede ver parte.
  </p>
  <p>Pulsa Enviar para añadir un trozo de historia.</p>
  <p>Pulsa Terminar para finalizar la historia y ver todo.</p>
  `,
})
export class HelpDialog {
}

@Component({
  selector: 'about-dialog',
  template: `<p>By <a href="https://github.com/alvaromr/caracoleitor">@alvarommr</a>, 2017</p>`,
})
export class AboutDialog {
}
