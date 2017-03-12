import { HistoryPiece } from './history-piece';
export class History {
  pieces: HistoryPiece [];
  finished: boolean;

  constructor() {
    this.pieces = [];
    this.finished = false;
  }

  public addPiece(hiddenText: string, shownText: string): void {
    this.pieces.push(new HistoryPiece(hiddenText, shownText));
  }

  public finish(): void {
    this.finished = true;
  }
}
