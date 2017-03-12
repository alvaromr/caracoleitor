import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { History } from '../shared/models/history';
import { START_EVENT } from '../app.component';

@Component({
  selector: 'caracoleitor-history-form',
  templateUrl: './history-form.component.html',
  styleUrls: ['./history-form.component.css']
})
export class HistoryFormComponent implements OnInit {
  textToShow: string;
  textToHide: string;

  @Input() history: History;
  @Output() emitter: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.start();
  }

  send(): void {
    if (!this.isValid()) {
      return;
    }
    this.history.addPiece(this.textToHide, this.textToShow);
    this.resetInputs();
  }

  isValid() {
    return this.textToShow && this.textToHide;
  }

  start(): void {
    this.resetInputs();
    this.emitter.emit(START_EVENT);
  }

  finish(): void {
    this.history.finish();
  }

  resetInputs() {
    this.textToShow = '';
    this.textToHide = '';
  }

  oddEvenClass(): any {
    const EVEN = this.history.piecesCount() % 2 === 0;
    return {odd: !EVEN, even: EVEN};
  }
}
