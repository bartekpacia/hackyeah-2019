import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { fadeInOut } from '@app/animations/fade-in-out.animation';

import { DEFAULT_LANGUAGE, Language, NUMBERING } from '@app/config/global';
import { IAnswer, IAnswerInfo } from '@app/interfaces/answer.interface';
import { IQuestion } from '@app/interfaces/question.interface';
import { AnswerInfoComponent } from '@app/modules/quiz/components/answer-info/answer-info.component';
import { AnswerService } from '@app/modules/quiz/services/answer.service';
import { ModalService } from '@app/modules/quiz/services/modal.service';
import { ScoreService } from '@app/modules/quiz/services/score.service';
import { TimerService } from '@app/modules/quiz/services/timer.service';

import { DestroyableComponent } from '@app/modules/shared/components/abstracts/destroyable/destroyable.component';
import { LanguageService } from '@app/modules/shared/services/language.service';

import { take, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-answer-selector',
  templateUrl: './answer-selector.component.html',
  styleUrls: ['./answer-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut],
})
export class AnswerSelectorComponent extends DestroyableComponent implements OnInit, OnChanges {
  private answerInfo: IAnswerInfo;
  private success: boolean;

  @Input() question: IQuestion;
  loaded: boolean;
  disableButtons: boolean;
  selectedAnswerId: string;
  numbering: string = NUMBERING;
  selectedLanguage: Language;
  defaultLanguage: Language = DEFAULT_LANGUAGE;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private answerService: AnswerService,
    private languageService: LanguageService,
    private timerService: TimerService,
    private modalService: ModalService,
    private scoreService: ScoreService,
  ) {
    super();
  }

  private reset(): void {
    this.selectedAnswerId = undefined;
    this.disableButtons = false;
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    this.languageService.lang$
      .asObservable()
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((lang: Language) => {
        this.selectedLanguage = lang;
        this.changeDetectorRef.detectChanges();
      });

    this.answerService.reset$
      .asObservable()
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(() => this.reset());

    this.timerService.timeout$
      .asObservable()
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(() => this.selectAnswer());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.question && changes.question.currentValue) {
      setTimeout(() => {
        this.loaded = true;
        this.changeDetectorRef.detectChanges();
      });
    }
  }

  selectAnswer(answer?: IAnswer): void {
    this.selectedAnswerId = answer ? answer.id : undefined;
    this.disableButtons = true;
    this.timerService.stop();

    this.answerService
      .fetchCorrectAnswer(this.question.id)
      .pipe(
        takeUntil(this.componentDestroyed$),
        take(1),
        tap((answerInfo: IAnswerInfo) => {
          this.answerInfo = answerInfo;
          this.changeDetectorRef.detectChanges();

          if (answer && answer.id === answerInfo.answerId) {
            this.success = true;
            this.scoreService.increaseBy(this.question.point);
          } else {
            this.success = false;
          }
        }),
      ).subscribe(() => this.evaluate());
  }

  evaluate(): void {
    this.modalService.open(AnswerInfoComponent, {
      question: this.question,
      answerInfo: this.answerInfo,
      selectedLanguage: this.selectedLanguage,
      success: this.success,
    }, undefined, false);
    this.loaded = false;
    this.changeDetectorRef.detectChanges();
  }
}
