import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { DEFAULT_LANGUAGE, Language } from '@app/config/global';
import { ICategory } from '@app/interfaces/category.interface';
import { IQuestion } from '@app/interfaces/question.interface';
import { QuestionService } from '@app/modules/quiz/services/question.service';

import { DestroyableComponent } from '@app/modules/shared/components/abstracts/destroyable/destroyable.component';
import { LanguageService } from '@app/modules/shared/services/language.service';

import { Observable } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent extends DestroyableComponent implements OnInit, OnChanges {
  @Input() category: ICategory;
  question: IQuestion;
  selectedLanguage$: Observable<Language>;
  defaultLanguage: Language = DEFAULT_LANGUAGE;

  constructor(
    private questionService: QuestionService,
    private languageService: LanguageService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    super();
  }

  private getNewQuestion(): void {
    this.questionService
      .fetchQuestion()
      .pipe(takeUntil(this.componentDestroyed$), take(1))
      .subscribe((question: IQuestion) => {
        this.question = question;
        this.changeDetectorRef.detectChanges();
      });
  }

  ngOnInit(): void {
    this.selectedLanguage$ = this.languageService.lang$
      .asObservable()
      .pipe(takeUntil(this.componentDestroyed$));

    this.questionService.getNewQuestion$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(() => this.getNewQuestion());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.category && changes.category.currentValue) {
      this.getNewQuestion();
    }
  }
}
