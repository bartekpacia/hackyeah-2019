import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ICounter } from '@app/interfaces/counter.interface';

import { DestroyableComponent } from '@app/modules/shared/components/abstracts/destroyable/destroyable.component';
import { LoaderService } from '@app/modules/shared/services/loader.service';

import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent extends DestroyableComponent implements OnInit {
  loading$: Observable<boolean>;
  loadRequests$: Observable<ICounter>;
  showCounter = false;

  constructor(private loaderService: LoaderService) {
    super();
  }

  ngOnInit(): void {
    this.loading$ = this.loaderService.loading$
      .asObservable()
      .pipe(takeUntil(this.componentDestroyed$));

    this.loadRequests$ = this.loaderService.requests$
      .asObservable()
      .pipe(takeUntil(this.componentDestroyed$));
  }
}
