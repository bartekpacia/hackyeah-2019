import { Injectable } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';

@Injectable()
export class CategoryService {
  difficulty$: Subject<number> = new Subject<number>();

  fetchCategories(): Observable<Array<number>> {
    return of([1, 2, 3]);
  }

  setDifficulty(difficulty: number): void {
    this.difficulty$.next(difficulty);
  }
}
