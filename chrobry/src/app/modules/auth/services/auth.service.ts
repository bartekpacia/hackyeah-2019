import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { RoutingPages } from '@app/config/routing';
import { CustomHttpParams, HttpService } from '@app/modules/shared/services/http.service';
import { UserService } from '@app/modules/shared/services/user.service';


@Injectable()
export class AuthService {

  constructor(private router: Router, private http: HttpService, private userService: UserService) { }

  login(credentials: any): void {
    const headers: HttpHeaders = new HttpHeaders().set(CustomHttpParams.LoaderMessage, 'Logging in');
    this.http
      .post(`login`, credentials, { headers })
      .pipe().subscribe(
        // tslint:disable-next-line: no-empty
        () => { },
        // tslint:disable-next-line: no-empty
        () => { },
        () => {
          this.userService.user = credentials;
          this.router.navigate([RoutingPages.App]);
        }
      );
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate([RoutingPages.Login]);
  }
}
