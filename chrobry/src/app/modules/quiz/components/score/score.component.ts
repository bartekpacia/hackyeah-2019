import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ScoreService } from '@app/modules/quiz/services/score.service';

import { DestroyableComponent } from '@app/modules/shared/components/abstracts/destroyable/destroyable.component';

import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreComponent extends DestroyableComponent implements OnInit {
  score$: Observable<number>;

  constructor(private scoreService: ScoreService) {
    super();
  }

  ngOnInit(): void {
    this.score$ = this.scoreService.score$
      .asObservable()
      .pipe(takeUntil(this.componentDestroyed$));
  }
}
