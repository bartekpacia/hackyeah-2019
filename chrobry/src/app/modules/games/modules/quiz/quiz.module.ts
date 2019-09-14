import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnswerInfoComponent } from '@app/modules/games/modules/quiz/components/answer-info/answer-info.component';
import { AnswerSelectorComponent } from '@app/modules/games/modules/quiz/components/answer-selector/answer-selector.component';
import { CategorySelectorComponent } from '@app/modules/games/modules/quiz/components/category-selector/category-selector.component';
import { CategoryComponent } from '@app/modules/games/modules/quiz/components/category/category.component';
import { CounterComponent } from '@app/modules/games/modules/quiz/components/counter/counter.component';
import { ModalComponent } from '@app/modules/games/modules/quiz/components/modal/modal.component';
import { QuestionComponent } from '@app/modules/games/modules/quiz/components/question/question.component';
import { ScoreComponent } from '@app/modules/games/modules/quiz/components/score/score.component';
import { TimerComponent } from '@app/modules/games/modules/quiz/components/timer/timer.component';
import { QuizComponent } from '@app/modules/games/modules/quiz/containers/quiz/quiz.component';
import { SummaryComponent } from '@app/modules/games/modules/quiz/containers/summary/summary.component';

import { AnswerService } from '@app/modules/games/modules/quiz/services/answer.service';
import { CategoryService } from '@app/modules/games/modules/quiz/services/category.service';
import { CounterService } from '@app/modules/games/modules/quiz/services/counter.service';
import { ModalService } from '@app/modules/games/modules/quiz/services/modal.service';
import { QuestionService } from '@app/modules/games/modules/quiz/services/question.service';
import { ScoreService } from '@app/modules/games/modules/quiz/services/score.service';
import { TimerService } from '@app/modules/games/modules/quiz/services/timer.service';
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
