import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ISnackbar } from '@app/interfaces/snackbar.interface';

import { DestroyableComponent } from '@app/modules/shared/components/abstracts/destroyable/destroyable.component';
import { SnackbarService } from '@app/modules/shared/services/snackbar.service';

import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackbarComponent extends DestroyableComponent implements OnInit {
  snackbars$: Observable<Array<ISnackbar>>;

  constructor(private snackbarService: SnackbarService) {
    super();
  }

  ngOnInit(): void {
    this.snackbars$ = this.snackbarService.alerts$.asObservable().pipe(takeUntil(this.componentDestroyed$));
  }

  closeSnackbar(snackbar: ISnackbar): void {
    this.snackbarService.remove(snackbar);
  }
}
