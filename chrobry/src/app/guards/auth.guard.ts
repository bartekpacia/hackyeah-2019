import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { RoutingPages } from '@app/config/routing';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router) { }

  private authLogic(): boolean {
    if (sessionStorage.getItem('user')) {
      return true;
    }

    this.router.navigate([RoutingPages.Login]);

    return false;
  }

  canLoad(): boolean {

    return this.authLogic();
  }

  canActivate(): boolean {

    return this.authLogic();
  }

  canActivateChild(): boolean {

    return this.authLogic();
  }
}
