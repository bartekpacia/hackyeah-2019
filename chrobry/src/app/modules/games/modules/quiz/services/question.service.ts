import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingAppPages, RoutingGamesPages, RoutingQuizPages } from '@app/config/routing';

import { getRandomArrayElement } from '@app/helpers/random.helper';
import { IQuestion } from '@app/interfaces/question.interface';
import { AnswerService } from '@app/modules/games/modules/quiz/services/answer.service';
import { CounterService } from '@app/modules/games/modules/quiz/services/counter.service';
import { TimerService } from '@app/modules/games/modules/quiz/services/timer.service';
import { CustomHttpParams, HttpService } from '@app/modules/shared/services/http.service';

import { EMPTY, Observable, Subject } from 'rxjs';
import { finalize, first } from 'rxjs/operators';

@Injectable()
export class QuestionService {
  private questionIdsList: Array<string> = [];
  getNewQuestion$: Subject<void> = new Subject<void>();

  constructor(
    private router: Router,
    private http: HttpService,
    private counterService: CounterService,
    private answerService: AnswerService,
    private timerService: TimerService
  ) { }


  set questionIds(questions: Array<string>) {
    this.questionIdsList = questions;
  }

  get questionIds(): Array<string> {
    return this.questionIdsList;
  }

  getNewQuestion(): void {
    this.getNewQuestion$.next();
  }

  fetchQuestion(questionId?: string): Observable<IQuestion> {
    const headers: HttpHeaders = new HttpHeaders().set(CustomHttpParams.LoaderMessage, 'Searching for questions');
    let randomQuestionId: string;

    if (!questionId) {
      randomQuestionId = getRandomArrayElement(this.questionIds);
      if (!randomQuestionId) {
        this.router.navigate([RoutingAppPages.Games, RoutingGamesPages.Quiz, RoutingQuizPages.Summary], { skipLocationChange: true });

        return EMPTY;
      }
    }

    return this.http
      .get(`questions/${questionId || randomQuestionId}`, { headers })
      .pipe(
        first(),
        finalize(() => {
          {
            this.answerService.reset();
            this.counterService.update();
            this.timerService.reset();
            this.removeQuestionFromList(questionId || randomQuestionId);
          }
        })
      );
  }

  reset(questions: Array<string>): void {
    this.questionIds = questions;
    this.counterService.reset(questions);
  }

  removeQuestionFromList(questionId: string): void {
    this.questionIdsList = this.questionIdsList.filter((id: string) => id !== questionId);
  }
}
