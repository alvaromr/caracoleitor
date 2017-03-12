import {Component, OnInit} from '@angular/core';
import {HistoryPiece} from "./history-piece";

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
}
