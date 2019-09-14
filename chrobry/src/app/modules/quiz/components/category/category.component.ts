import { Component, OnInit } from '@angular/core';

import { ICategory } from '@app/interfaces/category.interface';
import { CategoryService } from '@app/modules/quiz/services/category.service';

import { DestroyableComponent } from '@app/modules/shared/components/abstracts/destroyable/destroyable.component';

import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent extends DestroyableComponent implements OnInit {
  categories$: Observable<Array<ICategory>>;

  constructor(private categoryService: CategoryService) {
    super();
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService
      .fetchCategories()
      .pipe(takeUntil(this.componentDestroyed$));
  }
}
