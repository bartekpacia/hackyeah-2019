import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { DEFAULT_LANGUAGE, Language } from '@app/config/global';
import { IAnswerInfo } from '@app/interfaces/answer.interface';
import { ICounter } from '@app/interfaces/counter.interface';
import { IQuestion } from '@app/interfaces/question.interface';
import { CounterService } from '@app/modules/quiz/services/counter.service';
import { ModalService } from '@app/modules/quiz/services/modal.service';
import { QuestionService } from '@app/modules/quiz/services/question.service';

import { DestroyableComponent } from '@app/modules/shared/components/abstracts/destroyable/destroyable.component';

import { Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-answer-info',
  templateUrl: './answer-info.component.html',
  styleUrls: ['./answer-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnswerInfoComponent extends DestroyableComponent implements OnInit {
  lastAnswer$: Observable<boolean>;

  @Input() answerInfo: IAnswerInfo;
  @Input() question: IQuestion;
  @Input() selectedLanguage: Language;
  @Input() success: boolean;
  defaultLanguage: Language = DEFAULT_LANGUAGE;

  constructor(
    private modalService: ModalService,
    private questionService: QuestionService,
    private counterService: CounterService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.lastAnswer$ = this.counterService.counter$
      .asObservable()
      .pipe(
        takeUntil(this.componentDestroyed$),
        map((counter: ICounter) => counter.count === counter.maxCount)
      );
  }

  next(): void {
    this.questionService.getNewQuestion();
    this.modalService.close();
  }

  finish(): void {
    this.next();
  }
}
