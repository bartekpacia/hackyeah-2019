import { Injectable } from '@angular/core';

import { ICounter } from '@app/interfaces/counter.interface';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CounterService {
  private maxCount = 0;
  private count = 0;
  counter$: BehaviorSubject<ICounter> = new BehaviorSubject<ICounter>({ count: 0, maxCount: 0 });

  reset(questions: Array<string>): void {
    this.maxCount = questions.length;
    this.count = 0;
  }

  update(): void {
    this.count++;
    this.counter$.next({
      count: this.count,
      maxCount: this.maxCount,
    });
  }
}
