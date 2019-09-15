import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ScoreService {
  score$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  increaseBy(amount: number): void {
    this.score$.next(this.score$.value + amount);
  }

  decreaseBy(amount: number): void {
    this.score$.next(this.score$.value - amount);
  }

  reset(): void {
    this.score$.next(0);
  }
}
