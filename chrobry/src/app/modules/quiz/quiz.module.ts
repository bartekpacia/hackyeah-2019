import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnswerInfoComponent } from '@app/modules/quiz/components/answer-info/answer-info.component';
import { AnswerSelectorComponent } from '@app/modules/quiz/components/answer-selector/answer-selector.component';
import { CategorySelectorComponent } from '@app/modules/quiz/components/category-selector/category-selector.component';
import { CategoryComponent } from '@app/modules/quiz/components/category/category.component';
import { CounterComponent } from '@app/modules/quiz/components/counter/counter.component';
import { ModalComponent } from '@app/modules/quiz/components/modal/modal.component';
import { QuestionComponent } from '@app/modules/quiz/components/question/question.component';
import { ScoreComponent } from '@app/modules/quiz/components/score/score.component';
import { TimerComponent } from '@app/modules/quiz/components/timer/timer.component';
import { QuizComponent } from '@app/modules/quiz/containers/quiz/quiz.component';
import { SummaryComponent } from '@app/modules/quiz/containers/summary/summary.component';

import { AnswerService } from '@app/modules/quiz/services/answer.service';
import { CategoryService } from '@app/modules/quiz/services/category.service';
import { CounterService } from '@app/modules/quiz/services/counter.service';
import { ModalService } from '@app/modules/quiz/services/modal.service';
import { QuestionService } from '@app/modules/quiz/services/question.service';
import { ScoreService } from '@app/modules/quiz/services/score.service';
import { TimerService } from '@app/modules/quiz/services/timer.service';
import { DomService } from '@app/modules/shared/services/dom.service';

import { QuizRoutingModule } from './quiz-routing.module';
import { FillArrayPipe } from './pipes/fill-array.pipe';
import { SharedModule } from '@app/modules/shared/shared.module';

@NgModule({
  declarations: [
    QuizComponent,
    SummaryComponent,
    AnswerInfoComponent,
    AnswerSelectorComponent,
    CategoryComponent,
    CategorySelectorComponent,
    CounterComponent,
    ModalComponent,
    QuestionComponent,
    ScoreComponent,
    TimerComponent,
    FillArrayPipe,
  ],
  entryComponents: [
    AnswerInfoComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    SharedModule,
  ],
  providers: [
    AnswerService,
    CategoryService,
    DomService,
    CounterService,
    ModalService,
    QuestionService,
    ScoreService,
    TimerService,
  ],
})
export class QuizModule { }
