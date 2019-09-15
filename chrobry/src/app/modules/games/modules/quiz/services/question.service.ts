import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable()
export class QuestionService {
  getNewQuestion$: Subject<void> = new Subject<void>();

  getNewQuestion(): void {
    this.getNewQuestion$.next();
  }
}
