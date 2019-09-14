import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { RoutingPages } from '@app/config/routing';
import { IUser } from '@app/interfaces/user.interface';
import { CustomHttpParams, HttpService } from '@app/modules/shared/services/http.service';
import { UserService } from '@app/modules/shared/services/user.service';

import { finalize, first, switchMap, take } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(private router: Router, private http: HttpService, private userService: UserService) { }

  login(credentials: any): void {
    const headers: HttpHeaders = new HttpHeaders().set(CustomHttpParams.LoaderMessage, 'Logging in');
    this.http
      .get(`login/${credentials.username}`, { headers })
      .pipe(
        first(),
        take(1),
        switchMap((user: IUser) => this.userService.fetchUserData(user.id)),
        finalize(() => this.router.navigate([RoutingPages.App]))
      ).subscribe();
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate([RoutingPages.Login]);
  }
}
