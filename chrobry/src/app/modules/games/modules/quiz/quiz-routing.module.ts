import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutingQuizPages } from '@app/config/routing';
import { QuizComponent } from '@app/modules/games/modules/quiz/containers/quiz/quiz.component';
import { SummaryComponent } from '@app/modules/games/modules/quiz/containers/summary/summary.component';

const routes: Routes = [
  {path: RoutingQuizPages.Home, component: QuizComponent},
  {path: RoutingQuizPages.Summary, component: SummaryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
