import { Component, OnInit } from '@angular/core';

import { MenuService } from '@app/modules/shared/services/menu.service';

import { Subject } from 'rxjs';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { DestroyableComponent } from '@app/modules/shared/components/abstracts/destroyable/destroyable.component';
import { RoutingAppPages } from '@app/config/routing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends DestroyableComponent implements OnInit {
  showMenu$: Subject<boolean> = new Subject();
  isSubPage$: Subject<boolean> = new Subject();

  constructor(
    private menuService: MenuService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.showMenu$ = this.menuService.showMenu$;

    this.router.events
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((event: RouterEvent) => {
        if (event instanceof NavigationEnd) {
          this.isSubPage$.next(event.url !== `/${RoutingAppPages.Dashboard}`);
        }
      });
  }

  toggleMenu(): void {
    this.menuService.toggle();
  }

  goBack(): void {
    history.back();
  }
}
