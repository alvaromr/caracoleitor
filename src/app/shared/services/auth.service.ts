import { Injectable } from '@angular/core';

import { AngularFire, AuthProviders } from 'angularfire2';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export const AUTH_METHODS = {
  TWITTER: AuthProviders.Twitter,
  FACEBOOK: AuthProviders.Facebook,
  GOOGLE: AuthProviders.Google,
  GITHUB: AuthProviders.Github,
  PASSWORD: AuthProviders.Password,
};

@Injectable()
export class AuthService {
  authenticated: boolean;
  user: User;
  private authenticationStatus: BehaviorSubject<boolean>;

  constructor(public angularFire: AngularFire) {
    this.authenticated = false;
    this.user = null;
    this.authenticationStatus = new BehaviorSubject<boolean>(false);

    this.angularFire.auth.subscribe(
      user => this.changeState(user),
      error => console.log(error)
    );
  }

  public login(provider: number) {
    this.angularFire.auth.login({
      provider: provider
    });
  }

  public logout() {
    this.angularFire.auth.logout();
  }

  private changeState(externalServiceUser: any = null) {
    if (externalServiceUser) {
      this.authenticated = true;
      this.user = User.getFromGoogle(externalServiceUser);
    } else {
      this.authenticated = false;
      this.user = null;
    }

    this.authenticationStatus.next(this.authenticated);
  }

  get authentication(): Observable<boolean> {
    return this.authenticationStatus.asObservable();
  }
}
