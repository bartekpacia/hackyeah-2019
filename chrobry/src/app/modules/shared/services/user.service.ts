import { Injectable } from '@angular/core';

import { IUser } from '@app/interfaces/user.interface';
import { Subject } from 'rxjs';

@Injectable()
export class UserService {
  private _user: IUser;
  private _storageKey = 'user';
  user$: Subject<IUser> = new Subject<IUser>();


  set user(user: IUser) {
    sessionStorage.setItem(this._storageKey, JSON.stringify(user));
    this._user = user;
    this.user$.next(user);
  }

  get user(): IUser {
    if (!this._user) {
      this._user = JSON.parse(sessionStorage.getItem(this._storageKey));
    }

    return this._user;
  }
}
