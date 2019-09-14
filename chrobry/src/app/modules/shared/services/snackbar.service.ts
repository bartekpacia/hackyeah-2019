import { Injectable } from '@angular/core';

import { ISnackbar } from '@app/interfaces/snackbar.interface';

import { Subject } from 'rxjs';

@Injectable()
export class SnackbarService {
  private alerts: Array<ISnackbar> = [];
  alerts$: Subject<Array<ISnackbar>> = new Subject<Array<ISnackbar>>();

  add(snackbar: ISnackbar): void {
    this.alerts.push(snackbar);
    this.alerts$.next(this.alerts);
  }

  remove(snackbar: ISnackbar): void {
    this.alerts.splice(this.alerts.indexOf(snackbar), 1);
    this.alerts$.next(this.alerts);
  }
}
