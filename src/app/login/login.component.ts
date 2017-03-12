import { Component } from '@angular/core';
import { AuthService, AUTH_METHODS } from '../shared/services/auth.service';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'caracoleitor-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss'],
  providers: [AuthService, AngularFire]
})
export class LoginComponent {

  private AUTH_METHODS: any;

  constructor(public authService: AuthService) {
    this.AUTH_METHODS = AUTH_METHODS;
  }

  public login(authMethod: number) {
    this.authService.login(authMethod);
  }

  public logout() {
    this.authService.logout();
  }
}
