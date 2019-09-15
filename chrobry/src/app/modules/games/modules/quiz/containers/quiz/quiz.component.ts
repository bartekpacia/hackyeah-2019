import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CategoryService } from '@app/modules/games/modules/quiz/services/category.service';

import { DestroyableComponent } from '@app/modules/shared/components/abstracts/destroyable/destroyable.component';

import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent extends DestroyableComponent implements OnInit {
  selectedDifficulty$: Observable<number>;
  difficultyLevels$: Observable<Array<number>>;

  constructor(private categoryService: CategoryService) {
    super();
  }

  ngOnInit(): void {

    this.difficultyLevels$ = this.categoryService
      .fetchCategories()
      .pipe(takeUntil(this.componentDestroyed$));

    this.selectedDifficulty$ = this.categoryService.difficulty$
      .asObservable()
      .pipe(takeUntil(this.componentDestroyed$));
  }
}
