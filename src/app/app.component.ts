import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { AuthService } from './shared/services/auth.service';
import { History } from './shared/models/history';

export const START_EVENT = 'start';

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
    }
  }

  start(): void {
    this.history = new History();
  }
}
