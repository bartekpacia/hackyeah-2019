import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IAnswerInfo } from '@app/interfaces/answer.interface';

import { CustomHttpParams, HttpService } from '@app/modules/shared/services/http.service';

import { Observable, Subject } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable()
export class AnswerService {
  reset$: Subject<void> = new Subject<void>();

  constructor(private http: HttpService) { }

  reset(): void {
    this.reset$.next();
  }

  fetchCorrectAnswer(questionId: string): Observable<IAnswerInfo> {
    const headers: HttpHeaders = new HttpHeaders().set(CustomHttpParams.LoaderMessage, 'Checking the answer');

    return this.http
      .get(`answers/${questionId}`, { headers })
      .pipe(
        first(),
      );
  }
}
