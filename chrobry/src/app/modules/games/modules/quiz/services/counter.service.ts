import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CounterService {
  private count = 0;
  counter$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  reset(): void {
    this.count = 0;
  }

  update(): void {
    this.count++;
    this.counter$.next(this.count);
  }
}
