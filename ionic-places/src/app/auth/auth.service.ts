import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userIsAuthenticated = true;
  private _userId = 'abc';

  constructor() {
  }

  get userIsAuthenticated(): boolean {
    // eslint-disable-next-line no-underscore-dangle
    return this._userIsAuthenticated;
  }

  get userId(): string {
    // eslint-disable-next-line no-underscore-dangle
    return this._userId;
  }

  login() {
    // eslint-disable-next-line no-underscore-dangle
    this._userIsAuthenticated = true;
  }

  logout() {
    // eslint-disable-next-line no-underscore-dangle
    this._userIsAuthenticated = false;
  }

}
