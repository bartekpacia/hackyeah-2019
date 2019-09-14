import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ICategory } from '@app/interfaces/category.interface';
import { CategoryService } from '@app/modules/quiz/services/category.service';

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
  selectedCategory$: Observable<ICategory>;
  categories$: Observable<Array<ICategory>>;

  constructor(private categoryService: CategoryService) {
    super();
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService
      .fetchCategories()
      .pipe(takeUntil(this.componentDestroyed$));

    this.selectedCategory$ = this.categoryService.category$
      .asObservable()
      .pipe(takeUntil(this.componentDestroyed$));
  }
}
