import { Injectable } from '@angular/core';

import { ANSWER_TIME } from '@app/config/global';

import { Subject, Subscription, timer } from 'rxjs';
import { map, take, takeUntil, tap } from 'rxjs/operators';

@Injectable()
export class TimerService {
  private timerSubscription: Subscription;
  private timerReset$: Subject<void> = new Subject();
  timeout$: Subject<void> = new Subject();
  timer$: Subject<number> = new Subject<number>();

  private init(toTime: number = ANSWER_TIME): void {
    this.timerSubscription = timer(0, 1000).pipe(
      takeUntil(this.timerReset$),
      take(toTime + 1),
      map((time: number) => toTime - time),
      tap((time: number) => {
        this.timer$.next(time);

        if (time === 0) {
          this.timeout$.next();
          this.stop();
        }
      }),
    ).subscribe();
  }

  start(toTime: number = ANSWER_TIME) {
    this.init(toTime);
  }

  reset(toTime: number = ANSWER_TIME): void {
    if (this.timerSubscription) {
      this.stop();
    }
    this.init(toTime);
  }

  stop(): void {
    this.timerReset$.next();
    this.timerReset$.complete();
    this.timerSubscription.unsubscribe();
  }

}
