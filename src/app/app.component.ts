import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { AuthService } from './shared/services/auth.service';
import { History } from './shared/models/history';

export const START_EVENT = 'start';
export const FINISH_EVENT = 'finish';

@Component({
  selector: 'caracoleitor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, AngularFire]
})
export class AppComponent implements OnInit {
  history: History;

  ngOnInit(): void {
    this.start();
  }

  receive(event) {
    if (event === START_EVENT) {
      this.start();
    } else if (event === FINISH_EVENT) {
      this.finish();
    }
  }

  start(): void {
    this.history = new History();
  }

  finish(): void {
    this.history.finish();
  }
}
