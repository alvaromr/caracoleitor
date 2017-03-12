import { Component, Input } from '@angular/core';

@Component({
  selector: 'caracoleitor-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent {
  @Input() private history: History;
}
