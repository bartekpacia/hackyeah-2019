import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RoutingAppPages } from '@app/config/routing';
import { IUser } from '@app/interfaces/user.interface';
import { AuthService } from '@app/modules/auth/services/auth.service';
import { DestroyableComponent } from '@app/modules/shared/components/abstracts/destroyable/destroyable.component';
import { MenuService } from '@app/modules/shared/services/menu.service';

import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [AuthService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent extends DestroyableComponent implements OnInit {
  showMenu$: Observable<boolean>;
  user: IUser;
  RoutingAppPages: typeof RoutingAppPages = RoutingAppPages;

  constructor(private router: Router, private menuService: MenuService, private authService: AuthService) {
    super();
  }

  ngOnInit(): void {
    this.showMenu$ = this.menuService.showMenu$
      .asObservable()
      .pipe(takeUntil(this.componentDestroyed$));
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  navigateTo(path: string): void {
    this.menuService.close();
    this.router.navigate([path]);
  }

  logout(): void {
    this.menuService.close();
    this.authService.logout();
  }
}
