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
import { UserService } from '@app/modules/shared/services/user.service';

import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-answer-selector',
  templateUrl: './answer-selector.component.html',
  styleUrls: ['./answer-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnswerSelectorComponent extends DestroyableComponent implements OnInit, OnChanges {

  @Input() question: IQuestion;
  disableButtons: boolean;
  selectedAnswerId: number;
  numbering: string = NUMBERING;
  success: boolean;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private answerService: AnswerService,
    private userService: UserService,
  ) {
    super();
  }

  private reset(): void {
    this.success = undefined;
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
  }

  evaluate(): void {
    this.answerService
      .fetchCorrectAnswer(this.question.questionId, this.userService.user.currentUser.id, this.selectedAnswerId)
      .pipe(take(1)).subscribe((success: boolean) => {
        this.success = success;
        this.changeDetectorRef.detectChanges();
      });
  }
}
