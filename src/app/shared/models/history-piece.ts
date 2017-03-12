export class HistoryPiece {
  hiddenText: string;
  shownText: string;

  public constructor(hiddenText: string, shownText: string) {
    this.hiddenText = hiddenText;
    this.shownText = shownText;
  }
}
