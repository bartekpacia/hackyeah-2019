import { OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';

export abstract class DestroyableComponent implements OnDestroy {
  componentDestroyed$: Subject<void> = new Subject<void>();

  protected constructor() { }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
