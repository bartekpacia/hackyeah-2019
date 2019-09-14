import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ANSWER_TIME } from '@app/config/global';
import { TimerService } from '@app/modules/quiz/services/timer.service';

import { DestroyableComponent } from '@app/modules/shared/components/abstracts/destroyable/destroyable.component';

import { BehaviorSubject, Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent extends DestroyableComponent implements OnInit {
  maxCount: number = ANSWER_TIME;
  timerCount$: Observable<number>;
  progress$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private timerService: TimerService) {
    super();
  }

  ngOnInit(): void {
    this.timerCount$ = this.timerService.timer$
      .asObservable()
      .pipe(
        takeUntil(this.componentDestroyed$),
        tap((time: number) => {
          const progress: number = ((time - 1) / this.maxCount) * 100 + 0.1;
          this.progress$.next(progress >= 0 ? progress : 0);
        })
      );
  }
}
