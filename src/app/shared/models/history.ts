import { HistoryPiece } from './history-piece';
export class History {
  private pieces: HistoryPiece [];
  private finished: boolean;

  constructor() {
    this.pieces = [];
    this.finished = false;
  }

  public addPiece(hiddenText: string, shownText: string): void {
    this.pieces.push(new HistoryPiece(hiddenText, shownText));
  }

  public getPieces(): HistoryPiece[] {
    return this.pieces;
  }

  public piecesCount(): number {
    return this.pieces.length;
  }

  public finish(): void {
    this.finished = true;
  }

  public isFinished(): boolean {
    return this.finished;
  }
}
