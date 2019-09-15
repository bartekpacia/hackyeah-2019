import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CustomHttpParams, HttpService } from '@app/modules/shared/services/http.service';

import { Observable, Subject } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable()
export class AnswerService {
  reset$: Subject<void> = new Subject<void>();

  constructor(private http: HttpService) { }

  reset(): void {
    this.reset$.next();
  }

  fetchCorrectAnswer(questionId: string, userId: string, answerId: number): Observable<boolean> {
    const headers: HttpHeaders = new HttpHeaders().set(CustomHttpParams.LoaderMessage, 'Checking the answer');

    return this.http
      .post('game', { questionId, userId, answerId }, { headers })
      .pipe(
        first(),
        map((data) => data.status === 'CORRECT ANSWER')
      );
  }
}
