import { Injectable } from '@angular/core';

import { IUser } from '@app/interfaces/user.interface';
import { filter, first, take, tap } from 'rxjs/operators';
import { CustomHttpParams, HttpService } from '@app/modules/shared/services/http.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UserService {
  private _user: IUser;
  private _storageKey = 'user';
  user$: Subject<IUser> = new Subject<IUser>();

  constructor(private http: HttpService) { }

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

  init(): void {
    const storageUserData: IUser = JSON.parse(sessionStorage.getItem(this._storageKey));

    if (!storageUserData) {
      return;
    }

    this.fetchUserData(storageUserData.id);
  }

  fetchUserData(userId: string): Observable<IUser> {
    const headers: HttpHeaders = new HttpHeaders().set(CustomHttpParams.LoaderMessage, 'Receiving your information');

    return this.http
      .get(`users/${userId}`, { headers })
      .pipe(
        first(),
        take(1),
        filter((user: IUser) => !!user),
        tap((user: IUser) => this.user = user)
      );
  }
}
