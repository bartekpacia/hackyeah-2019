import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

import { NUMBERING } from '@app/config/global';
import { IQuestion } from '@app/interfaces/question.interface';
import { AnswerService } from '@app/modules/games/modules/quiz/services/answer.service';

import { DestroyableComponent } from '@app/modules/shared/components/abstracts/destroyable/destroyable.component';

import { takeUntil } from 'rxjs/operators';
import { listAnimation } from '@app/animations/list.animation';
// import { DB } from '@app/app.module';

@Component({
  selector: 'app-answer-selector',
  templateUrl: './answer-selector.component.html',
  styleUrls: ['./answer-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [listAnimation],
})
export class AnswerSelectorComponent extends DestroyableComponent implements OnInit, OnChanges {

  @Input() question: IQuestion;
  disableButtons: boolean;
  selectedAnswerId: number;
  numbering: string = NUMBERING;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private answerService: AnswerService,
  ) {
    super();
  }

  private reset(): void {
    this.selectedAnswerId = undefined;
    this.disableButtons = false;
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    this.answerService.reset$
      .asObservable()
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(() => this.reset());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.question && changes.question.currentValue) {
      this.reset();
    }
  }

  selectAnswer(answer?: number): void {
    this.selectedAnswerId = answer;
    this.disableButtons = true;
    this.evaluate();

    // this.answerService
    //     .fetchCorrectAnswer(this.question)
    //     .pipe(
    //     takeUntil(this.componentDestroyed$),
    //     take(1),
    //     tap((answerInfo: IAnswerInfo) => {
    //       this.answerInfo = answerInfo;
    //       this.changeDetectorRef.detectChanges();
    //
    //       if (answer && answer.id === answerInfo.answerId) {
    //         this.success = true;
    //         this.scoreService.increaseBy(this.question.point);
    //       } else {
    //         this.success = false;
    //       }
    //     }),
    //   ).subscribe(() => this.evaluate());
  }

  evaluate(): void {
    // const docRef: any = DB.collection('QUESTIONS').doc('4XXxKHNk7VUSdfs3gk71');
    // const getOptions: Object = {
    //   source: 'server'
    // };
    //
    // docRef.get(getOptions).then((doc) => {
    //   console.log("Cached document data:", doc.data());
    // }).catch(function(error) {
    //   console.log("Error getting cached document:", error);
    // });
  }
}
