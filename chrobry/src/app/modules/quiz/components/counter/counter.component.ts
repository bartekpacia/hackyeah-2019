import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ICounter } from '@app/interfaces/counter.interface';
import { CounterService } from '@app/modules/quiz/services/counter.service';

import { DestroyableComponent } from '@app/modules/shared/components/abstracts/destroyable/destroyable.component';

import { BehaviorSubject, Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent extends DestroyableComponent implements OnInit {
  counter$: Observable<ICounter>;
  progress$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private counterService: CounterService) {
    super();
  }

  ngOnInit(): void {
    this.counter$ = this.counterService.counter$
      .asObservable()
      .pipe(
        takeUntil(this.componentDestroyed$),
        tap((counter: ICounter) => {
          const progress: number = 100 / (counter.maxCount - 1) * (counter.count - 1);
          this.progress$.next(progress);
        })
      );
  }

}
