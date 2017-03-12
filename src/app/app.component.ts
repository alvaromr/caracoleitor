import { Component, OnInit } from '@angular/core';
import { HistoryPiece } from './history-piece';
import { AngularFire } from 'angularfire2';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'caracoleitor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, AngularFire]
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
    this.history.push(new HistoryPiece(hiddenText, shownText));
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
    const EVEN = this.history.length % 2 === 0;
    return {odd: !EVEN, even: EVEN};
  }
}
