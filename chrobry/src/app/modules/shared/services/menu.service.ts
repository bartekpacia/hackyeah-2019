import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MenuService {
  private showMenu: boolean;
  showMenu$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  open(): void {
    this.showMenu$.next(true);
    this.showMenu = true;
  }

  close(): void {
    this.showMenu$.next(false);
    this.showMenu = false;
  }

  toggle(): void {
    this.showMenu ? this.close() : this.open();
  }
}
