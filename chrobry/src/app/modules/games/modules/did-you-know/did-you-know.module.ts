import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DidYouKnowRoutingModule } from './did-you-know-routing.module';
import { SharedModule } from '@app/modules/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DidYouKnowComponent } from '@app/modules/games/modules/did-you-know/containers/did-you-know/did-you-know.component';
import { QuestionComponent } from '@app/modules/games/modules/did-you-know/components/question/question.component';
import { AnswerFactComponent } from '@app/modules/games/modules/did-you-know/components/answer-fact/answer-fact.component';

@NgModule({
  declarations: [
    DidYouKnowComponent,
    AnswerFactComponent,
    QuestionComponent,
  ],
  entryComponents: [
    AnswerFactComponent
  ],
  imports: [
    CommonModule,
    DidYouKnowRoutingModule,
    SharedModule,
    FontAwesomeModule,
  ],
  providers: [],
})
export class DidYouKnowModule { }
